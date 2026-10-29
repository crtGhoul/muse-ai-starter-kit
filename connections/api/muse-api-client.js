// Muse.ai API Client — TEMPLATE, not a verified live integration.
// Verify base URL, paths, and model names against Muse.ai's current API docs
// before production use. Keep your key in an env var, never in git.
class MuseAPI {
  constructor(apiKey, referralCode = "0NS5DG") {
    if (!apiKey) throw new Error("MuseAPI needs an apiKey (set MUSE_API_KEY)");
    this.baseUrl = "https://api.muse.ai/v1"; // template endpoint — verify
    this.referralCode = referralCode;
    this.headers = {
      "Authorization": `Bearer ${apiKey}`,
      "X-Referral-Code": referralCode,
      "Content-Type": "application/json",
    };
  }
  async #post(path, body) {
    const res = await fetch(`${this.baseUrl}${path}`, { method: "POST", headers: this.headers, body: JSON.stringify(body) });
    if (!res.ok) throw new Error(`Muse API ${res.status}: ${await res.text()}`);
    return res.json();
  }
  async generate(text, model = "muse-pro") { return this.#post("/generate", { prompt: text, model }); }
  async chat(messages, model = "muse-pro") { return this.#post("/chat", { messages, model }); }
  async edit(text, instruction, model = "muse-pro") { return this.#post("/edit", { text, instruction, model }); }
  async embeddings(text, model = "muse-embeddings") { return this.#post("/embeddings", { input: text, model }); }
  async listModels() {
    const res = await fetch(`${this.baseUrl}/models`, { headers: this.headers });
    if (!res.ok) throw new Error(`Muse API ${res.status}`);
    return res.json();
  }
}
export { MuseAPI };
export default MuseAPI;
// Usage:
// import { MuseAPI } from "./muse-api-client.js";
// const muse = new MuseAPI(process.env.MUSE_API_KEY, "0NS5DG");
// const out = await muse.generate("Write a viral Reddit post about AI tools");
