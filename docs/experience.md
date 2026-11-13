---
title: Experience
description: From regulated credit-risk modeling at BNP Paribas to technical lead for production AI agents at Boulanger — the full path, education, and certifications.
---

# Experience

Seven-plus years across two demanding engineering cultures: regulated credit risk at a major bank, then generative AI in production retail. The through-line: taking models out of notebooks and making them things an organization can actually run, trust, and build on.

## Boulanger — Senior AI Engineer, technical lead for AI agents
`Apr 2025 — Present` · France

Boulanger is one of France's largest electronics and appliance retailers (~€4B revenue, ~10,000 employees). I joined to build its generative AI assistant and have become the technical lead for AI agents across the company — owning architecture, development, Kubernetes deployment, API exposure, security, response quality, and the relationship with business teams, across four production systems on three channels. I now lead an AI engineering team on the customer-facing programs.

**Customer AI assistant — web & mobile.**
Replaced a legacy rule-based chatbot with a production LLM assistant covering the full customer journey. Six months from start to production; live since October 2025; in continuous release since.

- Designed a **LangGraph swarm architecture** — specialized agents, direct routing, native handoffs — built to minimize LLM calls per interaction (~2.4s average response time)
- Deployed on **Kubernetes** with a fully async pipeline (FastAPI + Motor + httpx) sized for concurrent load; exposed and secured the API on an enterprise gateway with per-channel subscription plans
- **Led the API contract negotiation across three front-end teams** (web, iOS, Android): 12 polymorphic content types, per-client capability declaration, escalation flows — the longest and most cross-functional part of the build
- Built the security layer into the graph itself: prompt-injection detection, off-scope filtering, per-agent tool isolation
- Run the quality loop with the business: acceptance sessions, feedback prioritization, versioned Markdown prompts iterated with **Langfuse** LLM-judge scoring on live traffic
- **Impact:** ~2,000 conversations/day · 73–75% resolved without escalation · 78% satisfaction across 10,450+ ratings — and organizationally, chat is now a baseline requirement in every new IT project at the company

**Shopping agent — the assistant's second generation.**
Named AI product lead of a multi-project program — sales assistant, guided after-sales, product care, and the platform's migration to the company's standard Kubernetes stack — and lead of its engineering team of five, including a senior DevOps engineer I recruited.

- Brought the after-sales and product-care journeys onto the new API although their teams weren't required to: one assistant for sales and after-sales instead of three integrations
- Held the line on pre-launch scope and delivery risk — prompt governance before tooling, no prompt editing by business teams yet, deployment rights granted feature by feature as engineers proved ready
- Launched October 2026 behind a feature flag (25% of traffic, then a 50/50 A/B test), mobile apps from November; 32 production tools, 912 automated tests, 328 red-team cases

**Vox — voice AI for the customer-service line.**
Lead developer and technical lead of the conversational API behind the customer-service phone line; involved from vendor selection onward and co-designer of the architecture (vendor as voice gateway, business logic in-house). Manage one developer.

- Ramped from 25% to **100% of customer-service calls in three days** (Oct 2026), on my recommendation: 56,000+ calls in the first six days, up to ~17,900 per day
- "The model names, the code decides": deterministic control, transfer, and routing guards; hexagonal FastAPI service with token-by-token SSE streaming
- Prompt caching, keep-warm, and a measured model migration: ~450 ms to first token, ~8.5× cheaper per turn
- Data-driven production analysis — stratified sampling, transcript-to-trace alignment — drove five fixes in 48 hours: **abandonment from 11.6% to 6–7.5%**, self-resolution four times the scoping estimate (29% on product questions)

**Self-BI — natural-language access to Snowflake.**
Took an in-house **MCP server** with **Gemini Enterprise** agents from proof of concept to production on two business scopes. Four independent security layers, validated by security and IT architects, so even a hallucinated query cannot touch data it shouldn't. Semantic layer extracted from Power BI and reconciled to the reference dashboard (within 0.01%); model chosen by blind comparison. Used weekly by the finance performance teams; turned a scope dispute between data and AI teams into the company's target architecture.

**Internal agents — Google Chat & Gemini Enterprise.**
Built the bridge that puts business-owned agents in Google Chat, starting with the company's **official HR assistant** — HR owns content, scope, and validation; I own the technical platform. Opened to every employee nationwide in November 2026 with four agents designed by business teams themselves.

`Python · LangGraph · Azure OpenAI · Claude (Vertex AI) · Gemini Enterprise · MCP · FastAPI · SSE · Kubernetes · MongoDB · Snowflake · Langfuse · Prometheus`

## ITS Group — AI / DevOps Engineer, Freelance
`Oct 2024 — Mar 2025` · Remote

Sole technical owner of a RAG system matching consultant profiles to client requirements — from blank page to production, alone.

- Full pipeline: CV ingestion → semantic embeddings (Weaviate) → retrieval → generation (OpenAI GPT)
- Conversational interface with iterative refinement (LangChain + Streamlit)
- GCP infrastructure from scratch — VPC, GKE, Terraform, Terragrunt — deployed on Kubernetes

`Python · LangChain · Weaviate · OpenAI · Streamlit · GCP · Terraform · Kubernetes`

## BNP Paribas Datalab — Senior Data Scientist
`Sep 2021 — May 2024` · Levallois-Perret

BNP Paribas's data & AI innovation lab. Shipped four ML projects to production across different business lines — each one packaged, monitored, and handed over, not just demonstrated.

- **Customer support chatbot** — fine-tuned SBERT for semantic Q&A over a knowledge base, cutting support workload by 40%
- **Fraud detection (Cetelem)** — XGBoost with a full MLOps pipeline: CI/CD, API, batch CLI
- **First-unpaid scoring** (Belgian subsidiary) — unpaid-installment prediction, fully production-packaged
- **Call-center volume forecasting** — LSTM + XGBoost ensemble, −30% forecast error, −15% operational cost

`Python · Scikit-learn · XGBoost · HuggingFace Transformers · PyTorch · FastAPI · MLflow · Docker`

## BNP Paribas Risk — Data Scientist / Risk Manager
`Apr 2018 — Sep 2021` · Bordeaux

Credit-risk modeling for BNP Paribas's risk division across four markets — France, Turkey, Germany, Belgium — in a Basel II/III regulated environment: model documentation, independent validation reviews, defended decisions.

- Built the division's internal Python scoring library — modular SOLID architecture, CI/CD, documentation
- **SME credit scoring (Turkey)** — logistic regression + random forest, +20% decision precision
- **Credit card behavioral scoring** (German subsidiary) — gradient boosting + CatBoost, +15% precision

This is where I learned model governance the hard way — under regulators. It's the discipline behind how I approach LLM security, observability, and validation today: the assumption that a model *will* be wrong, and the system has to be designed for that day.

`Python · Scikit-learn · XGBoost · CatBoost · Pandas`

---

## Education

**PhD, Fundamental Mathematics** — Université de Lille
A doctorate in pure mathematics is an unusual path into AI engineering. It shows up less in the frameworks I use and more in how I approach problems without a standard answer yet — reading the underlying optimization or probability theory rather than treating a model as a black box.

**M2, Data Science** — Université Paris-Saclay

## Certifications

- **Professional Data Engineer** — Google Cloud
