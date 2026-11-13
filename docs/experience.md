---
title: Experience
description: AI product and technical lead for AI agents at Boulanger, after six years of production ML in regulated banking at BNP Paribas. Full path, education, and certifications.
---

# Experience

Eight years across two demanding cultures: regulated credit risk at a major bank, then generative AI in production retail. The through-line is taking models out of notebooks and turning them into systems an organization can run, trust, and build on.

## Boulanger — AI Product Lead & Technical Lead, AI Agents
`Apr 2025 — Present` · Lille, France · Official title: Senior AI Engineer

Boulanger is one of France's largest electronics and appliance retailers (~€4B revenue, ~10,000 employees). I joined to build its generative AI assistant and became the technical lead for AI agents across the company.

**Outcome:** in 18 months, AI went from one pilot to a company standard. Chat is now a baseline requirement in every new IT project, and four AI systems serve customers on the web and mobile apps, callers on the customer-service line, and every employee.

**Scope:**

- Lead a team of five AI and DevOps engineers across the customer-facing programs; interviewed and recruited four of them, including a senior DevOps engineer with twenty years of experience
- Named AI product lead of the shopping-agent program, alongside the web, app, and merchandising product leads
- Own architecture, security, response quality, and production operations for the four systems below
- Work with e-commerce, customer service, after-sales, HR, finance, IT, and external vendors, from vendor selection to launch

**Customer AI assistant, web & mobile.**
Replaced a rule-based chatbot with a generative assistant covering the full customer journey. Six months from start to production, live since October 2025.

- Designed the multi-agent architecture to keep model calls per message to a minimum: ~2.4s average response time
- Negotiated one API contract with the web, iOS, and Android teams, so all three channels render the same conversation; the longest and most cross-functional part of the build
- Built security into the assistant itself: prompt-injection detection, off-scope filtering, and agents limited to their own tools
- Ran the quality loop with the business: acceptance sessions, feedback prioritization, and automated quality scoring on live traffic
- **Impact:** ~2,000 conversations a day · 73–75% end without a hand-off to a human · 78% positive among 10,450+ customers who rated

**Shopping agent, the assistant's second generation.**
A multi-project program: a sales assistant, guided after-sales, product care, and the platform's migration to the company's standard infrastructure.

- Brought the after-sales and product-care teams onto the new platform although they weren't required to: one assistant for sales and after-sales instead of three separate integrations
- Set the launch rules: prompts governed in code before moving to a managed tool, and production responsibility handed to each engineer feature by feature as they proved ready
- Launched October 2026 with a progressive rollout on the website, then the mobile apps in November; red-teamed and test-gated before launch

**Vox, voice AI for the customer-service line.**
Led the conversational AI behind the customer-service phone line. Involved from the vendor tender onward; co-designed the architecture that keeps business logic and access to company systems in-house, with the vendor as the voice gateway.

- Recommended a progressive launch: every inbound service call was answered first by the voice AI within three days of go-live, with 56,000+ calls in the first six days
- Kept every critical decision (ending a call, transferring to an agent, routing a breakdown) in deterministic code rather than in the model
- Cut cost and waiting time: about half a second before the voice starts answering, and a measured model migration about 8.5× cheaper per turn than the previous model
- Analyzed the first day of production and shipped five fixes in 48 hours, cutting call abandonment by more than a third

**Self-BI, natural-language access to the data warehouse.**
Took business teams from waiting on analysts to asking the data warehouse in plain language, from proof of concept to production on two business scopes.

- Four independent security layers, validated by the security team and IT architects: the agent can only read the data its use case is scoped to
- Numbers reconciled against the reference Power BI dashboards (within 0.01%); model chosen by blind comparison
- Used every week by the finance performance teams; aligned the data and AI teams on one target architecture

**Internal agents in Google Chat.**
Built the bridge that puts business-owned agents in the chat tool every employee already uses, starting with the company's **official HR assistant**. HR owns content, scope, and validation; I own the technical platform. Opened to every employee nationwide in November 2026, with four agents designed by business teams themselves.

`Python · LangGraph · Azure OpenAI · Claude · Gemini Enterprise · MCP · FastAPI · Kubernetes · Snowflake · Langfuse`

## ITS Group — AI / DevOps Engineer, Freelance
`Oct 2024 — Mar 2025` · Remote

Sole technical owner of a RAG system that matches consultant profiles to client requirements, from blank page to production.

- Full pipeline: CV ingestion, semantic embeddings (Weaviate), retrieval, and generation (OpenAI GPT)
- Conversational interface with iterative refinement (LangChain + Streamlit)
- GCP infrastructure built from scratch with Terraform and deployed on Kubernetes

`Python · LangChain · Weaviate · OpenAI · Streamlit · GCP · Terraform · Kubernetes`

## BNP Paribas Datalab — Senior Data Scientist
`Sep 2021 — May 2024` · Levallois-Perret

BNP Paribas's data and AI innovation lab. Shipped four ML projects to production across different business lines, each one packaged, monitored, and handed over rather than demonstrated.

- **Customer support chatbot:** fine-tuned SBERT for semantic Q&A over a knowledge base, cutting support workload by 40%
- **Fraud detection (Cetelem):** XGBoost with a full MLOps pipeline (CI/CD, API, batch CLI)
- **First-unpaid scoring** (Belgian subsidiary): unpaid-installment prediction, fully production-packaged
- **Call-center volume forecasting:** LSTM + XGBoost ensemble, −30% forecast error, −15% operational cost

`Python · Scikit-learn · XGBoost · HuggingFace Transformers · PyTorch · FastAPI · MLflow · Docker`

## BNP Paribas Risk — Data Scientist / Risk Manager
`Apr 2018 — Sep 2021` · Bordeaux

Credit-risk modeling for BNP Paribas's risk division across four markets (France, Turkey, Germany, Belgium) in a Basel II/III regulated environment: model documentation, independent validation reviews, defended decisions.

- Built the division's internal Python scoring library, with tests, CI/CD, and documentation
- **SME credit scoring (Turkey):** logistic regression + random forest, +20% decision precision
- **Credit card behavioral scoring** (German subsidiary): gradient boosting + CatBoost, +15% precision

This is where I learned model governance under regulators. It shapes how I run AI today: assume the model *will* be wrong, and design the system, the controls, and the ownership for that day.

`Python · Scikit-learn · XGBoost · CatBoost · Pandas`

---

## Education

**PhD, Fundamental Mathematics** — Université de Lille
It shows up less in the frameworks I use than in how I approach problems with no standard answer yet: reading the underlying optimization or probability theory rather than treating a model as a black box.

**M2, Data Science** — Université Paris-Saclay

## Certifications

- **Professional Data Engineer** — Google Cloud
