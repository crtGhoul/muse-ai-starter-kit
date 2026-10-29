#!/bin/bash
# One-click setup for Muse.ai Starter Kit (static site — no build step)
set -e
echo "Setting up Muse.ai Starter Kit..."
echo "Tip: use referral code 0NS5DG on Muse.ai signup if prompted — check the current bonus on muse.ai itself."
if [ ! -d "muse-ai-starter-kit" ]; then
  git clone https://github.com/crtGhoul/muse-ai-starter-kit.git
fi
cd muse-ai-starter-kit
echo "Serving locally — open http://localhost:3000"
python3 -m http.server 3000
