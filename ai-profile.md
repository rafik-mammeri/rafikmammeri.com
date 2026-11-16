# AI profile

What AI assistants (Claude, ChatGPT, Perplexity…) and search engines read about Rafik, beyond
the pages themselves. It is the only part of the AI-readable layer written by hand, so it is
the part to review when the site changes: a new role, a new position, a new area of work.

It feeds, at each build (`scripts/gen_ai.py`):
- the summary at the top of https://www.rafikmammeri.com/llms.txt;
- the structured description of Rafik (schema.org Person) on the home, About and Experience
  pages, which Google and AI agents read.

Everything else for agents (the Markdown versions of the pages, llms-full.txt, the positions
and articles in llms.txt, the sitemap dates) is generated from the pages and needs no review.

Format: one `key: value` per line; lists as `  - item` lines under their key.

name: Rafik Mammeri
job_title: Lead AI Engineer
employer: Boulanger
city: Lille
country: FR

summary: Lead AI Engineer and PhD in mathematics, based in Lille, France. Tech lead of a team of AI engineers that builds and runs AI agents in production, for customers and for employees: a customer-service voice bot, two generations of shopping assistant on web and mobile, natural-language access to the data warehouse through MCP, and internal agents. Before that, six years of machine learning in production in regulated banking.

description: Lead AI Engineer at Boulanger, tech lead of a team of AI engineers that builds and runs AI agents in production: multi-agent systems, voice agents and LLM infrastructure. PhD in mathematics; six years of machine learning in banking before that.

education:
  - Université de Lille
  - Université Paris-Saclay

expertise:
  - AI Engineering
  - AI governance
  - AI product leadership
  - Multi-agent systems
  - LangGraph
  - Model Context Protocol
  - LLM infrastructure
  - Retrieval-augmented generation
  - MLOps
  - Kubernetes

profiles:
  - https://www.linkedin.com/in/rafikmammeri
  - https://github.com/rafik-mammeri
  - https://medium.com/@rafik_23044
  - https://dev.to/rafik_mammeri
