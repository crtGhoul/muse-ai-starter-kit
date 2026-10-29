// Express webhook handler for Muse.ai events — TEMPLATE.
// Run: npm install express && node muse-webhook-handler.js
// TODO before production: verify the webhook signature using Muse.ai's
// documented signing secret, and only send welcome messages through a
// channel the user consented to. Do NOT auto-DM strangers.
const express = require("express");
const app = express();
app.use(express.json());

app.post("/muse-webhook", (req, res) => {
  const { event, data } = req.body || {};
  if (event === "user.signup" && data?.referralCode === "0NS5DG") {
    console.log(`New referral signup: ${data.userId}`);
    // Template welcome text — send only via an approved, consented channel:
    // "Welcome! Here's the Muse.ai Starter Kit: https://crtGhoul.github.io/muse-ai-starter-kit/"
  }
  if (event === "generation.completed") {
    console.log(`Generation done: ${data?.id}`);
  }
  res.status(200).send("OK");
});

app.listen(3000, () => console.log("Muse webhook running on port 3000"));
