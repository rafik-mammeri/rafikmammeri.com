---
title: "Experience"
description: "Positions I have held and what I built in each: what it was, its business impact, and the technology behind it."
hide:
  - navigation
  - toc
---

# Experience

The positions I have held and what I built in each: what it was, what it changed for the business, and the technology behind it.
{ .rm-lede }

## Boulanger { #boulanger }

Lead AI Engineer · April 2025 – present · Lille
{ .rm-meta }

Tech lead of a team of AI engineers that builds and runs the company's AI agents, for customers and for employees.

### Customer-service voice bot { #voice-bot }

The conversational AI behind the customer-service phone line, in production since 28 October 2026. I lead it end to end: architecture, code, integrations, customer authentication, monitoring and production analysis, working with the voice vendor and the customer-service teams. Involved from the vendor tender in late 2025, I co-designed the architecture that keeps business logic and customer data in-house. The agent is connected to 15 internal services, from order tracking and repairs to invoices, loyalty, stores and the product catalogue.

<div class="rm-impact" markdown>

**Impact**

- Rolled out from 25% to 100% of inbound calls in three days, a gradual ramp-up I recommended
- Over 50,000 calls in the first six days, 98% handled by the AI
- Over 10% of calls resolved without an advisor from the second day, against 2% planned
- Five fixes in 48 hours after the first day, cutting hang-ups by more than a third

</div>

<div class="rm-stack" markdown>

- :logos-langgraph: LangGraph
- :logos-anthropic: Anthropic
- :logos-python: Python
- :logos-fastapi: FastAPI
- :logos-kubernetes: Kubernetes
- :logos-gravitee: Gravitee
- :logos-mongodb: MongoDB
- :logos-langfuse: Langfuse
- :logos-prometheus: Prometheus
- :logos-grafana: Grafana
- :logos-gitlab: GitLab CI

</div>

### Shopping assistant, first generation { #shopping-assistant }

A generative assistant on the website and mobile apps for product advice, orders and after-sales, replacing a scripted chatbot. Multi-agent design, and one API contract negotiated with the web, iOS and Android teams.

<div class="rm-impact" markdown>

**Impact**

- In production in six months; about 2,000 conversations a day in spring 2026
- 78% positive ratings from customers
- Chat became a standard part of every new IT project

</div>

<div class="rm-stack" markdown>

- :logos-langgraph: LangGraph
- :logos-openai: OpenAI
- :logos-azureaisearch: Azure AI Search
- :logos-python: Python
- :logos-fastapi: FastAPI
- :logos-kubernetes: Kubernetes
- :logos-gravitee: Gravitee
- :logos-mongodb: MongoDB
- :logos-langfuse: Langfuse
- :logos-gitlab: GitLab CI

</div>

### Shopping assistant, second generation { #shopping-agent }

I lead the program as AI product lead: a sales assistant, guided after-sales, product care, and the move to the company's standard platform.

<div class="rm-impact" markdown>

**Impact**

- One assistant for sales and after-sales instead of separate integrations
- A/B test on 50% of website traffic since October 2026
- iOS and Android apps live since 3 November 2026

</div>

<div class="rm-stack" markdown>

- :logos-langgraph: LangGraph
- :logos-openai: OpenAI
- :logos-azureaisearch: Azure AI Search
- :logos-python: Python
- :logos-fastapi: FastAPI
- :logos-kubernetes: Kubernetes
- :logos-gravitee: Gravitee
- :logos-mongodb: MongoDB
- :logos-langfuse: Langfuse
- :logos-prometheus: Prometheus
- :logos-grafana: Grafana
- :logos-gitlab: GitLab CI

</div>

### Self-BI: data in plain language { #self-bi }

Started the project and took it to production with the data teams: business teams ask the data warehouse questions in plain language in Gemini Enterprise, through an in-house MCP server. Access is secured in four layers, from user sign-in with OAuth 2.0 and OpenID Connect to role-based access to the data.

<div class="rm-impact" markdown>

**Impact**

- Two business scopes in production; a new scope can be added in about three days
- Answers without waiting for an analyst, with figures that match the official dashboards
- Median answer time cut from 150 to 60 seconds with specialized tools
- Validated by the security team and IT architects, then chosen as the company's target architecture

</div>

<div class="rm-stack" markdown>

- :logos-modelcontextprotocol: MCP
- :logos-gemini: Gemini Enterprise
- :logos-snowflake: Snowflake
- :logos-googlecloud: Google Cloud
- :logos-gravitee: Gravitee
- OAuth 2.0
- :logos-openid: OpenID Connect
- RBAC
- :logos-python: Python
- :logos-langfuse: Langfuse
- :logos-prometheus: Prometheus
- :logos-grafana: Grafana

</div>

### Internal agents { #internal-agents }

The bridge that brings business-owned agents into the company messaging tool, starting with the official HR assistant, whose content HR owns.

<div class="rm-impact" markdown>

**Impact**

- Opened to every employee in November 2026, announced by HR and finance leadership
- Four agents designed by the business teams themselves

</div>

<div class="rm-stack" markdown>

- :logos-gemini: Gemini
- :logos-googlecloud: Google Cloud
- :logos-python: Python

</div>

## Freelance { #freelance }

Generative AI Engineer · October 2024 – March 2025 · Remote
{ .rm-meta }

### Consultant matching { #consultant-matching }

A conversational tool for an IT services firm: a salesperson describes a client need in plain language, the tool asks follow-up questions, then returns the best-matching consultant profiles. Built alone, from the first line to production, including the cloud infrastructure.

<div class="rm-impact" markdown>

**Impact**

- Profiles found in seconds instead of a manual search
- More precise matches against each client's specific requirements

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- :logos-langchain: LangChain
- :logos-openai: OpenAI
- Weaviate
- Streamlit
- :logos-googlecloud: Google Cloud
- :logos-terraform: Terraform
- :logos-kubernetes: Kubernetes
- :logos-docker: Docker

</div>

## BNP Paribas, Datalab { #bnp-paribas-datalab }

Senior Data Scientist · June 2021 – May 2024 · Paris
{ .rm-meta }

The group's data and AI lab: four machine-learning projects taken to production for different business lines.

### Customer-support chatbot { #support-chatbot }

Answers customer requests from the support knowledge base before they reach an advisor, using a fine-tuned language model.

<div class="rm-impact" markdown>

**Impact**

- 65% of incoming requests handled automatically
- 40% less workload for the support teams
- Support available around the clock

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- :logos-pytorch: PyTorch
- :logos-huggingface: Hugging Face Transformers
- :logos-fastapi: FastAPI
- :logos-docker: Docker
- :logos-mlflow: MLflow

</div>

### Call-volume forecasting { #call-forecasting }

Daily forecasts of incoming calls for a debt-collection call centre, to plan staffing around holidays and collection campaigns.

<div class="rm-impact" markdown>

**Impact**

- 30% lower forecast error on call peaks
- 15% lower operating cost

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- XGBoost
- :logos-fastapi: FastAPI
- :logos-docker: Docker
- :logos-mlflow: MLflow

</div>

### Fraud and payment-default scoring { #fraud-scoring }

Fraud detection on online consumer-credit applications, and prediction of first missed payments for the Belgian subsidiary, each taken to production with automated testing and deployment.

<div class="rm-impact" markdown>

**Impact**

- Fewer credit applications reviewed by hand, and faster answers to customers
- Collection teams can act first on the customers most likely to miss a payment

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- XGBoost
- :logos-scikitlearn: scikit-learn
- :logos-fastapi: FastAPI
- :logos-docker: Docker
- :logos-gitlab: GitLab CI

</div>

## BNP Paribas, Risk { #bnp-paribas-risk }

Data Scientist · January 2018 – May 2021 · Bordeaux
{ .rm-meta }

Credit-risk models for four countries under banking regulation (Basel II/III): every model documented and defended in independent review.

### SME credit scoring, Turkey { #sme-scoring }

Scoring of small and medium businesses applying for credit.

<div class="rm-impact" markdown>

**Impact**

- 20% more precise lending decisions
- Fewer payment defaults

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- :logos-scikitlearn: scikit-learn
- pandas

</div>

### Credit-card scoring, Germany { #card-scoring }

Behavioral scoring of credit-card customers for the German subsidiary.

<div class="rm-impact" markdown>

**Impact**

- 15% more precise risk scores
- Lower losses on bad debt

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- :logos-scikitlearn: scikit-learn
- CatBoost
- pandas

</div>

### Shared scoring library { #scoring-library }

The team's internal library for building scoring models, with tests, automated delivery and documentation.

<div class="rm-impact" markdown>

**Impact**

- Fewer code errors across teams
- Faster delivery on the projects that followed

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- :logos-gitlab: GitLab CI

</div>
