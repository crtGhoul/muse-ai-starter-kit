# 🚀 Muse.ai Starter Kit

**Copy-paste Muse.ai connections, agent templates, and writing skills — for beginners to experts.**

[![Muse.ai](https://img.shields.io/badge/Muse.ai-0NS5DG-blue)](https://muse.ai)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

> New to Muse.ai? Sign up at https://muse.ai and enter code `0NS5DG` if prompted. Any bonus is subject to Muse.ai's current terms shown on the signup screen — this kit doesn't guarantee a specific token amount.

## ✨ What's inside?

- **3 integration patterns:** API client, MCP bridge, webhook handler
- **3 agent templates:** Content Creator, Code Reviewer, Social Media
- **20 writing skills:** Copywriting, Storytelling, Technical Writing, SEO, Coding
- **One-click start:** clone → serve locally → copy any workflow

Total: **26 templates**, all in this repo, all MIT licensed.

## 🎯 How to use

### 1. Pick a connection

```js
// API example — verify endpoint/model names against Muse.ai's current docs
import { MuseAPI } from './connections/api/muse-api-client.js';
const muse = new MuseAPI(process.env.MUSE_API_KEY, '0NS5DG');
const result = await muse.generate('Write a viral Reddit post');
```

### 2. Use a pre-built agent

```js
import contentCreator from './connections/agents/content-creator.js';
const post = await muse.generate(contentCreator.prompt.replace('[TOPIC]', 'AI Tools'));
```

### 3. Use a writing skill

Open any file in `connections/skills/`, replace the `[BRACKETS]`, paste into Muse.ai.

## 🚀 Run locally

```bash
git clone https://github.com/crtGhoul/muse-ai-starter-kit.git
cd muse-ai-starter-kit
python3 -m http.server 3000
# Open http://localhost:3000
```

Or: `bash scripts/quickstart.sh`

## 🌐 Deploy to GitHub Pages

1. Create the repo (see note below) and push this folder to `main`
2. Settings → Pages → Deploy from a branch → `main` / root, **or** enable GitHub Actions and let `.github/workflows/deploy.yml` deploy it
3. Your site will be live at: https://crtGhoul.github.io/muse-ai-starter-kit/

> Repo note: this kit was built locally first and is **not yet published**. The GitHub App used here cannot push `.github/workflows/` files (403, seen 2026-10-28), so that file may need adding via the GitHub web UI or a git-push seat. Don't share the Pages URL as live until the repo actually exists.

## 📢 Share on Reddit (manual — please follow subreddit rules)

Copy-paste draft: see `reddit-post.md`. Suggested communities: r/artificial, r/learnprogramming, r/startups, r/SideProject — only where self-promotion is allowed, with honest disclosure that `0NS5DG` is a referral code.

This kit has **no auto-poster**. Automated posting risks bans and breaks subreddit rules; the manual draft is the intended path.

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Add your connection/skill (real prompts only — no fake testimonials, no invented stats)
4. Submit a PR

## ⚠️ Honest notes

- Not affiliated with Muse.ai or Meta.
- API/MCP/webhook code is a template: verify endpoints, auth, and model names against Muse.ai's current docs before production use.
- Never commit an API key. Use environment variables.
- Counts above are template counts, not verified live integrations or user numbers.

## 📜 License

MIT — see [LICENSE](LICENSE).
