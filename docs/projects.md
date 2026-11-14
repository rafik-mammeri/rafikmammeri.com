---
title: "Projects"
description: "AI agents in production: a customer-service voice bot, two generations of shopping assistant, natural-language analytics, and internal agents."
hide:
  - navigation
  - toc
---

# Projects

Four AI products in production. For each one: the context, what I did, and what it changed.
{ .rm-lede }

## Customer-service voice bot { #voice-bot }

2026 · Voice
{ .rm-meta }

**Context.** Replace the keypad phone menu of the customer-service line with a natural conversation.

<div class="grid cards rm-figures" markdown>

-   __3 days__

    to take 100% of inbound calls

-   __Thousands__

    of calls answered every day

-   __4×__

    more calls resolved without an advisor than planned

</div>

**What I did**

- Involved from the vendor tender to production
- Designed the architecture that keeps business logic and data access in-house, with the vendor handling only the voice
- Recommended a gradual launch
- Analysed the first day of calls and shipped five fixes in 48 hours

**Result.** 81% of transferred calls reach the advisor with the reason already identified.

<div class="rm-stack" markdown>

- :logos-langgraph: LangGraph
- :logos-claude: Claude
- :logos-python: Python
- :logos-fastapi: FastAPI
- :logos-kubernetes: Kubernetes
- :logos-mongodb: MongoDB

</div>

## Shopping assistants, web and mobile { #shopping-assistants }

2025 – 2026 · Web and mobile
{ .rm-meta }

**Context.** Replace a scripted chatbot with a generative assistant covering advice, orders and after-sales.

<div class="grid cards rm-figures" markdown>

-   __~2,000__

    conversations a day

-   __78%__

    positive ratings

-   __6 months__

    from start to production

</div>

**What I did**

- First generation: multi-agent architecture, an API contract negotiated with the web, iOS and Android teams, in production in six months
- Second generation: AI product lead of the program; brought the after-sales teams onto the same platform

**Result.** One assistant for sales and after-sales instead of separate projects.

<div class="rm-stack" markdown>

- :logos-langgraph: LangGraph
- :logos-azure: Azure OpenAI
- :logos-python: Python
- :logos-fastapi: FastAPI
- :logos-kubernetes: Kubernetes
- :logos-mongodb: MongoDB

</div>

## Self-BI: data in plain language { #self-bi }

2026 · Data
{ .rm-meta }

**Context.** Business teams had to wait for analysts to get their numbers.

**What I did**

- Started the project and took it to production with the data teams
- An MCP server secured in four layers
- Business rules taken from the existing dashboards, then checked against them
- Model chosen by blind comparison

**Result.** Figures that match the official dashboards, and an architecture that became the company's target.

<div class="rm-stack" markdown>

- :logos-modelcontextprotocol: MCP
- :logos-gemini: Gemini
- :logos-snowflake: Snowflake
- :logos-googlecloud: Google Cloud
- :logos-python: Python

</div>

## Internal agents { #internal-agents }

2026 · Employees
{ .rm-meta }

**Context.** Give employees assistants inside the tool they already use every day.

**What I did**

- Built the bridge between the company messaging tool and the agents
- The official HR assistant belongs to HR: they own its content, scope and validation

**Result.** Open to every employee since November 2026, with four agents designed by business teams themselves.

<div class="rm-stack" markdown>

- :logos-gemini: Gemini
- :logos-googlecloud: Google Cloud
- :logos-python: Python

</div>
