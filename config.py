import os

BASE_URLS = {
    "local": "http://localhost:8000",
}

SITE_ENV = os.environ.get("SITE_ENV", "local")
BASE_URL = BASE_URLS[SITE_ENV]
ROOT_DIR = "pages"
LAYOUTS_BASE_DIR = "_layouts"
SITE_DIR = "_site"
REGISTERED_HOOKS = {}
SITE_STATE = {}