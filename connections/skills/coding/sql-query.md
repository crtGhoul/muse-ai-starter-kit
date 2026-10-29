# SQL Query

**When to use:** queries that are correct and explainable, not just fast-looking.

## Prompt — copy, replace [BRACKETS], paste into Muse.ai

```
Write a SQL query that [GOAL] on tables [SCHEMA]. Explain in plain language what each part does, note any index that would help, and warn about rows that could be missed (NULLs, duplicates). Dialect: [POSTGRES/MYSQL/SQLITE].
```

## Good output looks like

- Query + plain-language explanation + index note + NULL warning

## Tips
- Replace every [BRACKET] before you run it — leftovers leak into the output.
- Ask for a shorter version first if the first draft rambles, then expand only the best section.
- Check facts, prices, and claims yourself before publishing. Muse.ai drafts; you verify.

> New to Muse.ai? Sign up at https://muse.ai and enter code `0NS5DG` if prompted. Any bonus is subject to Muse.ai's current terms shown on the signup screen — check there before you rely on a specific amount.
