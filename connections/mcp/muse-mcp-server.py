"""Muse.ai MCP Bridge — TEMPLATE.
Requires: pip install mcp httpx
Set MUSE_API_KEY in your environment. Never hardcode a key.
Verify the endpoint and model names against Muse.ai's current docs.
"""
import os
import httpx
from mcp.server import Server

app = Server("muse-ai-mcp")
API_KEY = os.environ.get("MUSE_API_KEY", "")
BASE = "https://api.muse.ai/v1"  # template endpoint — verify

async def _post(path, payload):
    if not API_KEY:
        raise RuntimeError("Set MUSE_API_KEY first")
    async with httpx.AsyncClient(timeout=60) as client:
        r = await client.post(f"{BASE}{path}",
            headers={"Authorization": f"Bearer {API_KEY}", "X-Referral-Code": "0NS5DG"},
            json=payload)
        r.raise_for_status()
        return r.json()

@app.tool()
async def generate_with_muse(prompt: str, model: str = "muse-pro") -> str:
    """Generate text using Muse.ai."""
    data = await _post("/generate", {"prompt": prompt, "model": model})
    return data.get("output") or str(data)

@app.tool()
async def chat_with_muse(messages: list, model: str = "muse-pro") -> str:
    """Chat with Muse.ai using a list of {role, content} messages."""
    data = await _post("/chat", {"messages": messages, "model": model})
    return data.get("output") or str(data)

@app.tool()
async def list_models() -> str:
    """List available Muse.ai models (if the API exposes this route)."""
    async with httpx.AsyncClient(timeout=30) as client:
        r = await client.get(f"{BASE}/models",
            headers={"Authorization": f"Bearer {API_KEY}"})
        r.raise_for_status()
        return r.text
