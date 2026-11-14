---
title: "Projets"
description: "Les postes que j'ai occupés et ce que j'y ai construit : le projet, son impact métier et les technologies utilisées."
hide:
  - navigation
  - toc
---

# Projets

Les postes que j'ai occupés et ce que j'y ai construit : ce qu'était chaque projet, ce qu'il a changé pour l'entreprise, et les technologies derrière.
{ .rm-lede }

## Boulanger { #boulanger }

Lead AI Engineer · avril 2025 – aujourd'hui · Lille
{ .rm-meta }

Tech lead d'une équipe d'ingénieurs IA qui construit et fait tourner les agents IA de l'entreprise, pour les clients et pour les collaborateurs.

### Voice bot du service client { #voice-bot }

L'IA conversationnelle derrière la ligne téléphonique du service client, qui remplace le serveur vocal à touches. Impliqué de l'appel d'offres à la production ; j'ai conçu l'architecture qui garde la logique métier et les données clients dans l'entreprise.

<div class="rm-impact" markdown>

**Impact**

- Tous les appels entrants pris en charge en trois jours après le lancement, des milliers d'appels par jour
- Quatre fois plus d'appels résolus sans conseiller que prévu
- 81 % des appels transférés arrivent au conseiller avec le motif déjà identifié

</div>

<div class="rm-stack" markdown>

- :logos-langgraph: LangGraph
- :logos-claude: Claude
- :logos-python: Python
- :logos-fastapi: FastAPI
- :logos-kubernetes: Kubernetes
- :logos-mongodb: MongoDB

</div>

### Assistant d'achat, première génération { #shopping-assistant }

Un assistant génératif sur le site et les applications mobiles, pour le conseil produit, les commandes et l'après-vente, à la place d'un chatbot à scénarios. Conception multi-agents, et un contrat d'API négocié avec les équipes web, iOS et Android.

<div class="rm-impact" markdown>

**Impact**

- En production en six mois, environ 2 000 conversations par jour
- 78 % d'avis positifs des clients
- Le chat est devenu un volet standard de chaque nouveau projet informatique

</div>

<div class="rm-stack" markdown>

- :logos-langgraph: LangGraph
- :logos-azure: Azure OpenAI
- :logos-python: Python
- :logos-fastapi: FastAPI
- :logos-kubernetes: Kubernetes
- :logos-mongodb: MongoDB

</div>

### Assistant d'achat, seconde génération { #shopping-agent }

Lead produit IA du programme : assistant de vente, après-vente guidé, entretien des produits, et passage sur la plateforme standard de l'entreprise.

<div class="rm-impact" markdown>

**Impact**

- Un seul assistant pour la vente et l'après-vente, au lieu d'intégrations séparées
- Lancé en octobre 2026 sur le site, puis sur les applications mobiles

</div>

<div class="rm-stack" markdown>

- :logos-langgraph: LangGraph
- :logos-azure: Azure OpenAI
- :logos-python: Python
- :logos-fastapi: FastAPI
- :logos-kubernetes: Kubernetes

</div>

### Self-BI : les données en langage naturel { #self-bi }

Lancé le projet et l'ai mené jusqu'à la production avec les équipes data : les équipes métier interrogent l'entrepôt de données en langage naturel, via un serveur MCP interne sécurisé en quatre couches.

<div class="rm-impact" markdown>

**Impact**

- Des réponses sans attendre un analyste, avec des chiffres alignés sur les tableaux de bord officiels
- Devenu l'architecture cible de l'entreprise pour les agents d'analyse

</div>

<div class="rm-stack" markdown>

- :logos-modelcontextprotocol: MCP
- :logos-gemini: Gemini
- :logos-snowflake: Snowflake
- :logos-googlecloud: Google Cloud
- :logos-python: Python

</div>

### Agents internes { #internal-agents }

La passerelle qui amène les agents des métiers dans la messagerie de l'entreprise, à commencer par l'assistant RH officiel, dont les RH maîtrisent le contenu.

<div class="rm-impact" markdown>

**Impact**

- Ouvert à tous les collaborateurs depuis novembre 2026
- Quatre agents conçus par les métiers eux-mêmes

</div>

<div class="rm-stack" markdown>

- :logos-gemini: Gemini
- :logos-googlecloud: Google Cloud
- :logos-python: Python

</div>

## Freelance { #freelance }

Generative AI Engineer · octobre 2024 – mars 2025 · à distance
{ .rm-meta }

### Rapprochement de consultants { #consultant-matching }

Un outil pour une ESN qui rapproche des profils de consultants des besoins clients. Construit seul, de la première ligne à la production, infrastructure cloud comprise.

<div class="rm-impact" markdown>

**Impact**

- Passé d'une page blanche à la production en six mois

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

Senior Data Scientist · juin 2021 – mai 2024 · Paris
{ .rm-meta }

Le laboratoire data et IA du groupe : quatre projets de machine learning mis en production pour différents métiers.

### Chatbot de support client { #support-chatbot }

Réponses sémantiques à partir de la base de connaissances du support, avec un modèle de langage affiné.

<div class="rm-impact" markdown>

**Impact**

- 40 % de charge en moins pour les équipes support

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- :logos-pytorch: PyTorch
- Transformers

</div>

### Prévision des volumes d'appels { #call-forecasting }

Prévision des appels entrants pour planifier les effectifs du centre d'appels.

<div class="rm-impact" markdown>

**Impact**

- 30 % d'erreur de prévision en moins
- 15 % de coûts d'exploitation en moins

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- :logos-pytorch: PyTorch
- XGBoost
- :logos-scikitlearn: scikit-learn

</div>

### Scoring de fraude et d'impayés { #fraud-scoring }

Détection de fraude pour le crédit à la consommation, et prédiction des premiers impayés pour la filiale belge, chacun livré avec tests et déploiement automatisés.

<div class="rm-impact" markdown>

**Impact**

- Les deux modèles packagés et transmis aux équipes qui les exploitent

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- XGBoost
- :logos-mlflow: MLflow
- :logos-docker: Docker

</div>

## BNP Paribas, Risk { #bnp-paribas-risk }

Data Scientist · janvier 2018 – mai 2021 · Bordeaux
{ .rm-meta }

Modèles de risque de crédit pour quatre pays, sous régulation bancaire (Bâle II/III) : chaque modèle documenté et défendu en revue indépendante.

### Scoring crédit des PME, Turquie { #sme-scoring }

Notation des petites et moyennes entreprises qui demandent un crédit.

<div class="rm-impact" markdown>

**Impact**

- Des décisions de crédit 20 % plus précises

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- :logos-scikitlearn: scikit-learn

</div>

### Scoring des cartes de crédit, Allemagne { #card-scoring }

Scoring comportemental des clients cartes de crédit de la filiale allemande.

<div class="rm-impact" markdown>

**Impact**

- Des décisions 15 % plus précises

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- XGBoost
- CatBoost

</div>

### Librairie de scoring partagée { #scoring-library }

La librairie interne de l'équipe pour construire les modèles de scoring, avec tests, livraison automatisée et documentation.

<div class="rm-impact" markdown>

**Impact**

- Une base commune et testée pour les modèles de l'équipe

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- CI/CD

</div>
