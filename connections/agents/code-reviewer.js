// Muse.ai Agent: Senior Code Reviewer
const prompt = `
You are a senior developer. Review this code and provide:
1. Bug fixes (with line references where possible)
2. Performance optimizations
3. Security vulnerabilities
4. Best practice suggestions
5. Refactored version
Code to review:
[PASTE CODE HERE]
`.trim();
export default { name: "Code Reviewer", prompt, model: "muse-pro" };
