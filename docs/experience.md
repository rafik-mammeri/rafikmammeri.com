---
title: Experience
description: From regulated credit-risk modeling at BNP Paribas to technical lead for production AI agents at Boulanger — the full path, education, and certifications.
---

# Experience

Seven-plus years across two demanding engineering cultures: regulated credit risk at a major bank, then generative AI in production retail. The through-line: taking models out of notebooks and making them things an organization can actually run, trust, and build on.

## Boulanger — Senior AI Engineer, technical lead for AI agents
`Apr 2025 — Present` · France

Boulanger is one of France's largest electronics and appliance retailers (~€4B revenue, ~10,000 employees). I joined to build its generative AI assistant and have become the technical lead for AI agents across the company — owning architecture, development, Kubernetes deployment, API exposure, security, response quality, and the relationship with business teams, across four production systems on three channels.

**Customer AI assistant — web & mobile.**
Replaced a legacy rule-based chatbot with a production LLM assistant covering the full customer journey. Six months from start to production; live since October 2025; in continuous release since.

- Designed a **LangGraph swarm architecture** — specialized agents, direct routing, native handoffs — built to minimize LLM calls per interaction (~2.4s average response time)
- Deployed on **Kubernetes** with a fully async pipeline (FastAPI + Motor + httpx) sized for concurrent load; exposed and secured the API on an enterprise gateway with per-channel subscription plans
- **Led the API contract negotiation across three front-end teams** (web, iOS, Android): 12 polymorphic content types, per-client capability declaration, escalation flows — the longest and most cross-functional part of the build
- Built the security layer into the graph itself: prompt-injection detection, off-scope filtering, per-agent tool isolation
- Run the quality loop with the business: acceptance sessions, feedback prioritization, versioned Markdown prompts iterated with **Langfuse** LLM-judge scoring on live traffic
- **Impact:** ~2,000 conversations/day · 73–75% resolved without escalation · 78% satisfaction across 10,450+ ratings — and organizationally, chat is now a baseline requirement in every new IT project at the company

**Self-BI — natural-language access to Snowflake.**
Designed and built an **MCP server** exposing the data warehouse's query and semantic-search capabilities, paired with **Google ADK agents on Vertex AI** inside Gemini Enterprise. Four independent security layers — gateway auth, validated service headers, SQL statement-type enforcement, read-only per-use-case Snowflake roles — so even a hallucinated query cannot touch data it shouldn't. Solved private connectivity between public GCP and internal infrastructure (Private Service Connect + conditional proxy layer).

**Internal agents — Google Chat & Gemini Enterprise.**
Deployed business-owned agents for employees, including the company's **official HR assistant** — HR owns content, scope, and validation; I own the technical platform. Pattern being industrialized as a reusable Terraform template so each new departmental agent is a provisioning task, not a project.

**Vox — voice callbot.**
Extending the assistant to the phone channel: token-by-token SSE streaming (speech synthesis starts before generation ends), deterministic hard-rule escalation with zero superfluous LLM calls, hexagonal architecture with a framework-free domain layer.

`Python · LangGraph · Azure OpenAI GPT-4o · Gemini 2.5 Pro · Google ADK · MCP · FastAPI · Kubernetes · Vertex AI · Snowflake · Langfuse`

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
