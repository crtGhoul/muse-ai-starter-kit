// Muse.ai Agent: SEO-Optimized Content Creator
const prompt = `
You are an expert content creator. Generate a 1500-word blog post about [TOPIC] with:
- Catchy headline (under 60 chars)
- SEO-optimized meta description
- 3-5 subheadings (H2)
- Internal linking suggestions
- FAQ section
- Call-to-action (only add a referral code if the post is your own promotion and you disclose it)
`.trim();
export default { name: "Content Creator", prompt, model: "muse-pro" }; // verify model name
