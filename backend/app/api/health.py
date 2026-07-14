from datetime import UTC, datetime

from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from sqlalchemy import text

from app.core.redis import redis_client
from app.db.session import engine

router = APIRouter(tags=["health"])


@router.get("/health")
def health_check() -> dict[str, str]:
    return {
        "status": "healthy",
        "service": "cloudcart-api",
        "timestamp": datetime.now(UTC).isoformat(),
    }


@router.get("/readiness")
def readiness_check() -> JSONResponse:
    checks: dict[str, str] = {
        "database": "unavailable",
        "redis": "unavailable",
    }

    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        checks["database"] = "healthy"
    except Exception:
        pass

    try:
        redis_client.ping()
        checks["redis"] = "healthy"
    except Exception:
        pass

    is_ready = all(value == "healthy" for value in checks.values())

    return JSONResponse(
        status_code=(
            status.HTTP_200_OK
            if is_ready
            else status.HTTP_503_SERVICE_UNAVAILABLE
        ),
        content={
            "status": "ready" if is_ready else "not_ready",
            "checks": checks,
            "timestamp": datetime.now(UTC).isoformat(),
        },
    )