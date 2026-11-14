---
title: "Projects"
description: "Positions I have held and what I built in each: what it was, its business impact, and the technology behind it."
hide:
  - navigation
  - toc
---

# Projects

The positions I have held and what I built in each: what it was, what it changed for the business, and the technology behind it.
{ .rm-lede }

## Boulanger { #boulanger }

Lead AI Engineer · April 2025 – present · Lille
{ .rm-meta }

Tech lead of a team of AI engineers that builds and runs the company's AI agents, for customers and for employees.

### Customer-service voice bot { #voice-bot }

The conversational AI behind the customer-service phone line, replacing the keypad menu. Involved from the vendor tender to production; designed the architecture that keeps business logic and customer data in-house.

<div class="rm-impact" markdown>

**Impact**

- Every inbound call handled within three days of launch, thousands of calls a day
- Four times more calls resolved without an advisor than planned
- 81% of transferred calls reach the advisor with the reason already identified

</div>

<div class="rm-stack" markdown>

- :logos-langgraph: LangGraph
- :logos-claude: Claude
- :logos-python: Python
- :logos-fastapi: FastAPI
- :logos-kubernetes: Kubernetes
- :logos-mongodb: MongoDB

</div>

### Shopping assistant, first generation { #shopping-assistant }

A generative assistant on the website and mobile apps for product advice, orders and after-sales, replacing a scripted chatbot. Multi-agent design, and one API contract negotiated with the web, iOS and Android teams.

<div class="rm-impact" markdown>

**Impact**

- In production in six months, about 2,000 conversations a day
- 78% positive ratings from customers
- Chat became a standard part of every new IT project

</div>

<div class="rm-stack" markdown>

- :logos-langgraph: LangGraph
- :logos-azure: Azure OpenAI
- :logos-python: Python
- :logos-fastapi: FastAPI
- :logos-kubernetes: Kubernetes
- :logos-mongodb: MongoDB

</div>

### Shopping assistant, second generation { #shopping-agent }

AI product lead of the program: a sales assistant, guided after-sales, product care, and the move to the company's standard platform.

<div class="rm-impact" markdown>

**Impact**

- One assistant for sales and after-sales instead of separate integrations
- Launched in October 2026 on the website, then on the mobile apps

</div>

<div class="rm-stack" markdown>

- :logos-langgraph: LangGraph
- :logos-azure: Azure OpenAI
- :logos-python: Python
- :logos-fastapi: FastAPI
- :logos-kubernetes: Kubernetes

</div>

### Self-BI: data in plain language { #self-bi }

Started the project and took it to production with the data teams: business teams ask the data warehouse questions in plain language, through an in-house MCP server secured in four layers.

<div class="rm-impact" markdown>

**Impact**

- Answers without waiting for an analyst, with figures that match the official dashboards
- Became the company's target architecture for analytics agents

</div>

<div class="rm-stack" markdown>

- :logos-modelcontextprotocol: MCP
- :logos-gemini: Gemini
- :logos-snowflake: Snowflake
- :logos-googlecloud: Google Cloud
- :logos-python: Python

</div>

### Internal agents { #internal-agents }

The bridge that brings business-owned agents into the company messaging tool, starting with the official HR assistant, whose content HR owns.

<div class="rm-impact" markdown>

**Impact**

- Open to every employee since November 2026
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

A tool for an IT services firm that matches consultant profiles to client requirements. Built alone, from the first line to production, including the cloud infrastructure.

<div class="rm-impact" markdown>

**Impact**

- Taken from a blank page to production in six months

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- :logos-langchain: LangChain
- RAG
- :logos-googlecloud: Google Cloud
- :logos-terraform: Terraform
- :logos-kubernetes: Kubernetes

</div>

## BNP Paribas, Datalab { #bnp-paribas-datalab }

Senior Data Scientist · June 2021 – May 2024 · Paris
{ .rm-meta }

The group's data and AI lab: four machine-learning projects taken to production for different business lines.

### Customer-support chatbot { #support-chatbot }

Semantic question answering over the support knowledge base, with a fine-tuned language model.

<div class="rm-impact" markdown>

**Impact**

- 40% less workload for the support teams

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- :logos-pytorch: PyTorch
- Transformers

</div>

### Call-volume forecasting { #call-forecasting }

Forecasts of incoming call volumes to plan call-centre staffing.

<div class="rm-impact" markdown>

**Impact**

- 30% lower forecast error
- 15% lower operating cost

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- :logos-pytorch: PyTorch
- XGBoost
- :logos-scikitlearn: scikit-learn

</div>

### Fraud and payment-default scoring { #fraud-scoring }

Fraud detection for consumer credit, and prediction of first missed payments for the Belgian subsidiary, each delivered with automated testing and deployment.

<div class="rm-impact" markdown>

**Impact**

- Both models packaged and handed over to the teams running them

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- XGBoost
- :logos-mlflow: MLflow
- :logos-docker: Docker

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

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- :logos-scikitlearn: scikit-learn

</div>

### Credit-card scoring, Germany { #card-scoring }

Behavioural scoring of credit-card customers for the German subsidiary.

<div class="rm-impact" markdown>

**Impact**

- 15% more precise decisions

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- XGBoost
- CatBoost

</div>

### Shared scoring library { #scoring-library }

The team's internal library for building scoring models, with tests, automated delivery and documentation.

<div class="rm-impact" markdown>

**Impact**

- One shared, tested base for the team's models

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- CI/CD

</div>
