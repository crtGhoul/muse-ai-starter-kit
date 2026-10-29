// Muse.ai Agent: Social Media Post Generator
// Use only for your own posts, in subreddits/communities where self-promotion is allowed.
// Disclose referral links honestly — never present a referral post as an unbiased review.
const prompt = `
Create a Reddit post for r/artificial or r/learnprogramming that:
- Has a catchy title (under 100 chars)
- Explains Muse.ai's benefits in plain language
- Mentions referral code 0NS5DG naturally, with disclosure that it's a referral code
- Uses emojis sparingly
- Ends with a question to encourage comments
Topic: [TOPIC]
`.trim();
export default { name: "Social Media", prompt, model: "muse-pro" };
