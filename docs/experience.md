---
title: Experience
---

# Experience

Seven years across two very different engineering cultures: regulated credit risk at a large bank, then generative AI in production retail. The thread connecting them is the same: take a model from notebook to something that runs reliably, at scale, in front of real users.

## Boulanger — Senior AI Engineer
`Apr 2025 — Present` · France

Boulanger is one of France's largest electronics and appliance retailers (~€4B revenue). I joined to build its generative AI conversational assistant and have since become the technical lead for AI agents across the company — end to end: architecture, development, Kubernetes deployment, API exposure, security, and response quality.

**Conversational AI assistant — web & mobile**
Replaced a legacy rule-based chatbot with a production LLM assistant handling the full customer journey: product discovery, order tracking, after-sales, human escalation. Live since October 2025.

- Designed a **LangGraph swarm architecture** — specialized agents with direct routing and native handoffs, built to minimize LLM calls per interaction and keep latency low (~2.4s average response time)
- Deployed on **Kubernetes**: sized ReplicaSets and CPU/memory resources, built a fully async pipeline (FastAPI + Motor + httpx) to absorb concurrent load without blocking workers
- Co-designed the API contract with the web, iOS, and Android teams — 12 polymorphic content types (text, product carousels, link cards, escalation actions)
- Exposed and secured the API on **Gravitee API Manager**, with subscription plans per consuming channel
- Built a security layer into the graph itself: prompt-injection detection, per-agent tool isolation, guardrails before any agent call
- Runs a versioned, Markdown-based prompt system, iterated continuously using **Langfuse** LLM-judge scoring
- **Impact:** ~2,000 conversations/day, 73–75% resolved without human escalation, 78% positive satisfaction across 10,000+ ratings

**Self-BI — natural-language access to Snowflake data**
Business teams (digital, commerce, retail) needed to query Snowflake without going through a data analyst. I designed and built an **MCP server** exposing SQL, Cortex Analyst, and Cortex Search, paired with a **Google ADK agent on Vertex AI** deployed inside Gemini Enterprise — the interface teams already use daily.

- Four-layer security model: API gateway auth, mandatory service headers, SQL-type enforcement in the MCP middleware, and read-only Snowflake roles scoped per use case — so even a hallucinated query can't touch data it shouldn't
- Solved private connectivity between a public Vertex AI Agent Engine and Boulanger's internal infrastructure via Private Service Connect and a conditional HTTP proxy layer

**Agents on internal channels**
Deployed AI agents on Google Chat and Gemini Enterprise for internal collaborators — including an official HR assistant built with the HR team as product owner, backed by Vertex AI Data Stores for retrieval over official documentation.

**Vox — voice callbot**
Currently extending the assistant to the voice channel: a streaming API (SSE, token-by-token) built with a hexagonal architecture, deterministic hard-rule escalation (zero LLM calls where a rule suffices), and response lengths tuned for text-to-speech.

`Python · LangGraph · Azure OpenAI GPT-4o · Gemini 2.5 Pro · Google ADK · MCP · FastAPI · Kubernetes · Vertex AI · Snowflake · Langfuse`

## ITS Group — AI / DevOps Engineer, Freelance
`Oct 2024 — Mar 2025` · Remote

Sole technical owner of a RAG system matching consultant profiles to client requirements, built from a blank page.

- Full pipeline: CV ingestion → semantic embeddings (Weaviate) → retrieval → generation (OpenAI GPT)
- Conversational interface with iterative question refinement (LangChain + Streamlit)
- GCP infrastructure from scratch — VPC, GKE, Terraform, Terragrunt — deployed on Kubernetes with Docker

`Python · LangChain · Weaviate · OpenAI · Streamlit · GCP · Terraform · Kubernetes`

## BNP Paribas Datalab — Senior Data Scientist
`Sep 2021 — May 2024` · Levallois-Perret

BNP Paribas's data & AI innovation lab. Shipped four ML projects to production across different business lines.

- **Customer support chatbot** — fine-tuned SBERT for semantic Q&A over a knowledge base, cutting support workload by 40%
- **Fraud detection (Cetelem)** — XGBoost with a full MLOps pipeline: CI/CD, API, batch CLI
- **First-unpaid scoring** (Belgian subsidiary) — unpaid-installment prediction, fully packaged for production
- **Call-center volume forecasting** — LSTM + XGBoost ensemble, reducing forecast error by 30% and operational cost by 15%

`Python · Scikit-learn · XGBoost · HuggingFace Transformers · PyTorch · FastAPI · MLflow · Docker`

## BNP Paribas Risk — Data Scientist / Risk Manager
`Apr 2018 — Sep 2021` · Bordeaux

Credit risk modeling for BNP Paribas's risk division, across multiple markets — France, Turkey, Germany, Belgium — in a Basel II/III regulated environment.

- Built an internal Python scoring library — modular SOLID architecture, CI/CD, documentation
- **SME credit scoring (Turkey)** — logistic regression + random forest, +20% decision precision
- **Credit card behavioral scoring** (German subsidiary) — gradient boosting + CatBoost, +15% precision

`Python · Scikit-learn · XGBoost · CatBoost · Pandas`

---

## Education

**PhD, Fundamental Mathematics** — Université de Lille
A doctorate in pure mathematics is an unusual path into AI engineering. It shows up less in the frameworks I use and more in how I approach problems that don't have a standard answer yet — reading the underlying optimization or probability theory rather than treating a model as a black box.

**M2, Data Science** — Université Paris-Saclay

## Certifications

- **Professional Data Engineer** — Google Cloud
