from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "CloudCart API"
    environment: str = "local"
    debug: bool = True
    api_prefix: str = "/api/v1"

    database_url: str = (
        "postgresql+psycopg://cloudcart:"
        "cloudcart_local_password@localhost:5432/cloudcart"
    )

    redis_url: str = "redis://:cloudcart_redis_password@localhost:6379/0"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()