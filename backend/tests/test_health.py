from unittest.mock import MagicMock, patch

from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_check() -> None:
    response = client.get("/api/v1/health")

    assert response.status_code == 200

    payload = response.json()

    assert payload["status"] == "healthy"
    assert payload["service"] == "cloudcart-api"


def test_readiness_check() -> None:
    mock_connection = MagicMock()
    mock_context_manager = MagicMock()
    mock_context_manager.__enter__.return_value = mock_connection

    with (
        patch(
            "app.api.health.engine.connect",
            return_value=mock_context_manager,
        ),
        patch(
            "app.api.health.redis_client.ping",
            return_value=True,
        ),
    ):
        response = client.get("/api/v1/readiness")

    assert response.status_code == 200

    payload = response.json()

    assert payload["status"] == "ready"
    assert payload["checks"]["database"] == "healthy"
    assert payload["checks"]["redis"] == "healthy"