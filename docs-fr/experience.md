---
title: "Expérience"
description: "Les postes que j'ai occupés et ce que j'y ai construit : le projet, son impact métier et les technologies utilisées."
hide:
  - navigation
  - toc
---

# Expérience

Les postes que j'ai occupés et ce que j'y ai construit : ce qu'était chaque projet, ce qu'il a changé pour l'entreprise, et les technologies derrière.
{ .rm-lede }

## :logos-boulanger: Boulanger { #boulanger data-years="2025 – aujourd'hui" data-lead="Tech lead d'une équipe d'ingénieurs IA" data-key="Des agents IA en production pour les clients et les collaborateurs" }

Lead AI Engineer · avril 2025 – aujourd'hui · Lille
{ .rm-meta }

L'équipe construit et fait tourner les agents IA de l'entreprise, pour les clients et pour les collaborateurs.

### Voice bot du service client { #voice-bot data-one="L'agent IA vocal de la ligne du service client." data-head="Environ 20 000 appels par jour" }

L'agent IA vocal derrière la ligne du service client. Mon travail couvre l'architecture, le code, les intégrations, l'authentification des clients, la supervision et l'analyse de production, avec le fournisseur de la voix et les équipes du service client. J'étais responsable de son déploiement à l'échelle : tests de charge, autoscaling des pods et configuration des ressources, supervision et observabilité des ressources et des métriques, et alertes sur ces métriques. Impliqué dès l'appel d'offres fin 2025, j'ai co-conçu l'architecture qui garde la logique métier et les données clients dans l'entreprise. L'agent est connecté à 15 services internes, du suivi de commande et des réparations aux factures, à la fidélité, aux magasins et au catalogue.

<div class="rm-impact" markdown>

**Impact**

- Environ 20 000 appels par jour, tous pris en charge par l'agent vocal IA
- Entre 10 et 15 % des appels résolus sans conseiller

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
- :logos-pydantic: Pydantic
- :logos-ruff: Ruff
- :logos-pytest: pytest
- :logos-sonarqube: SonarQube

</div>

### Assistant d'achat, seconde génération { #shopping-agent data-one="Un chat où le client agit directement : boutons, carrousels, panier." data-head="Environ 10 000 conversations par jour" }

Intégration de composants d'interface dans le chat : boutons qui mènent à la page demandée (fiche produit, compte client), carrousels de produits, ajout au panier. Les agents choisissent les composants à afficher selon la réponse, et plusieurs agents peuvent répondre en même temps, en streaming. J'ai construit l'architecture agentique, ainsi que le contrat d'API entre le backend des agents et les fronts web et mobile. J'étais responsable de son déploiement à l'échelle : tests de charge, autoscaling des pods et configuration des ressources, supervision et observabilité des ressources et des métriques, et alertes sur ces métriques.

<div class="rm-impact" markdown>

**Impact**

- Environ 10 000 conversations par jour
- Le chat fait désormais partie de chaque nouveau projet IT lié à l'expérience client

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
- :logos-pydantic: Pydantic
- :logos-ruff: Ruff
- :logos-pytest: pytest
- :logos-sonarqube: SonarQube

</div>

### Assistant d'achat, première génération { #shopping-assistant data-one="Un assistant génératif pour le conseil, les commandes et l'après-vente, sur le web et les apps." data-head="" }

Un assistant génératif sur le site et les applications mobiles, pour le conseil produit, les commandes et l'après-vente, à la place d'un chatbot à scénarios. Conception multi-agents, et un contrat d'API défini avec les équipes web, iOS et Android.

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
- :logos-pydantic: Pydantic
- :logos-ruff: Ruff
- :logos-pytest: pytest
- :logos-sonarqube: SonarQube

</div>

### Self-BI : les données en langage naturel { #self-bi data-one="Les équipes métier interrogent l'entrepôt de données en langage naturel." data-head="Deux périmètres métier en production" }

J'ai lancé le projet et l'ai mené jusqu'à la production avec les équipes data : les équipes métier interrogent l'entrepôt de données en langage naturel dans Gemini Enterprise, via un serveur MCP interne. L'accès est sécurisé en quatre couches, de l'authentification des utilisateurs par OAuth 2.0 et OpenID Connect au contrôle d'accès par rôle (RBAC) sur les données. Pour passer à l'échelle, les équipes data construisent des produits de données dédiés à ces usages : des données préparées et documentées, avec une couche sémantique de définitions métier et d'indicateurs, pour que l'agent s'appuie sur les mêmes chiffres que les tableaux de bord.

<div class="rm-impact" markdown>

**Impact**

- Deux périmètres métier en production ; un nouveau périmètre s'ajoute en trois jours environ
- Des réponses sans attendre un analyste, avec des chiffres alignés sur les tableaux de bord officiels
- Validé par la sécurité et les architectes, puis retenu comme architecture cible de l'entreprise

</div>

<div class="rm-stack" markdown>

- :logos-modelcontextprotocol: MCP
- :logos-gemini: Gemini Enterprise
- :logos-snowflake: Snowflake
- :logos-googlecloud: Google Cloud
- :logos-cloudrun: Cloud Run
- :logos-kubernetes: Kubernetes
- :logos-gravitee: Gravitee
- OAuth 2.0
- :logos-openid: OpenID Connect
- RBAC
- :logos-python: Python
- :logos-langfuse: Langfuse
- :logos-prometheus: Prometheus
- :logos-grafana: Grafana
- :logos-pydantic: Pydantic
- :logos-ruff: Ruff
- :logos-pytest: pytest
- :logos-sonarqube: SonarQube

</div>

### Agents internes { #internal-agents data-one="Assistants RH et procédures dans la messagerie de l'entreprise." data-head="Ouvert à tous les collaborateurs" }

La passerelle qui amène les agents des métiers dans la messagerie de l'entreprise, à commencer par l'assistant RH officiel, dont les RH maîtrisent le contenu.

<div class="rm-impact" markdown>

**Impact**

- Ouvert à tous les collaborateurs en novembre 2026, annoncé par la direction des RH et la direction financière
- Quatre agents conçus par les métiers eux-mêmes

</div>

<div class="rm-stack" markdown>

- :logos-gemini: Gemini Enterprise
- :logos-googlechat: Google Chat
- :logos-cloudrun: Cloud Run
- :logos-firestore: Firestore
- :logos-gemini: Gemini
- :logos-googlecloud: Google Cloud
- :logos-python: Python
- :logos-pytest: pytest

</div>

## :logos-rm: Freelance { #freelance data-years="2024 – 2025" data-key="Un produit, de la première ligne de code à la production" }

Generative AI Engineer · octobre 2024 – mars 2025 · à distance
{ .rm-meta }

### Rapprochement de consultants { #consultant-matching data-one="Un produit d'IA générative qui trouve les bons profils pour un besoin client." data-head="Des profils en quelques secondes" }

Un outil conversationnel pour une ESN : un commercial décrit le besoin d'un client en langage naturel, l'outil pose des questions pour le préciser, puis propose les profils de consultants les plus pertinents. Construit seul, de la première ligne à la production, infrastructure cloud comprise.

<div class="rm-impact" markdown>

**Impact**

- Des profils trouvés en quelques secondes au lieu d'une recherche manuelle
- Des correspondances plus précises avec les exigences de chaque client

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
- :logos-pydantic: Pydantic
- :logos-ruff: Ruff
- :logos-pytest: pytest
- :logos-sonarqube: SonarQube

</div>

## :logos-bnpparibas: BNP Paribas, Datalab { #bnp-paribas-datalab data-years="2021 – 2024" data-key="Quatre projets de machine learning en production" }

Senior Data Scientist · juin 2021 – mai 2024 · Paris
{ .rm-meta }

Le laboratoire data et IA du groupe : quatre projets de machine learning mis en production pour différents métiers.

### Chatbot de support client { #support-chatbot data-one="Répond aux demandes de support avant qu'elles n'arrivent à un conseiller." data-head="40 % de charge support en moins" }

Répond aux demandes des clients à partir de la base de connaissances du support, avant qu'elles n'arrivent à un conseiller, avec un modèle de langage affiné.

<div class="rm-impact" markdown>

**Impact**

- 40 % de charge en moins pour les équipes support

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- :logos-pytorch: PyTorch
- :logos-huggingface: Hugging Face Transformers
- :logos-fastapi: FastAPI
- :logos-docker: Docker
- :logos-mlflow: MLflow
- :logos-pydantic: Pydantic
- :logos-pytest: pytest
- :logos-sonarqube: SonarQube

</div>

### Prévision des volumes d'appels { #call-forecasting data-one="Prévisions quotidiennes d'appels pour planifier les effectifs d'un centre d'appels." data-head="Erreur de prévision réduite de 30 %" }

Prévision quotidienne des appels entrants d'un centre de recouvrement, pour planifier les effectifs en tenant compte des jours fériés et des campagnes de relance.

<div class="rm-impact" markdown>

**Impact**

- 30 % d'erreur de prévision en moins sur les pics d'appels

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- XGBoost
- :logos-fastapi: FastAPI
- :logos-docker: Docker
- :logos-mlflow: MLflow
- :logos-pydantic: Pydantic
- :logos-pytest: pytest
- :logos-sonarqube: SonarQube

</div>

### Scoring de fraude et d'impayés { #fraud-scoring data-one="Détection de fraude et prédiction d'impayés pour le crédit à la consommation." data-head="Moins de revues manuelles" }

Détection de fraude sur les demandes de crédit à la consommation en ligne, et prédiction des premiers impayés pour la filiale belge, chacun mis en production avec tests et déploiement automatisés.

<div class="rm-impact" markdown>

**Impact**

- Moins de dossiers de crédit traités à la main, et des réponses plus rapides aux clients
- Les équipes de recouvrement agissent d'abord sur les clients les plus susceptibles d'un impayé

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- XGBoost
- :logos-scikitlearn: scikit-learn
- :logos-fastapi: FastAPI
- :logos-docker: Docker
- :logos-gitlab: GitLab CI
- :logos-pydantic: Pydantic
- :logos-pytest: pytest
- :logos-sonarqube: SonarQube

</div>

## :logos-bnpparibas: BNP Paribas, Risk { #bnp-paribas-risk data-years="2018 – 2021" data-key="Modèles de risque de crédit pour quatre pays" }

Data Scientist · janvier 2018 – mai 2021 · Bordeaux
{ .rm-meta }

Modèles de risque de crédit pour quatre pays, sous régulation bancaire (Bâle II/III) : chaque modèle documenté et défendu en revue indépendante.

### Scoring crédit des PME, Turquie { #sme-scoring data-one="Scoring crédit des petites et moyennes entreprises." data-head="Décisions 20 % plus précises" }

Notation des petites et moyennes entreprises qui demandent un crédit.

<div class="rm-impact" markdown>

**Impact**

- Des décisions de crédit 20 % plus précises
- Moins de défauts de paiement

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- :logos-scikitlearn: scikit-learn
- pandas
- :logos-pytest: pytest
- :logos-sonarqube: SonarQube

</div>

### Scoring des cartes de crédit, Allemagne { #card-scoring data-one="Scoring comportemental des clients cartes de crédit." data-head="Scores 15 % plus précis" }

Scoring comportemental des clients cartes de crédit de la filiale allemande.

<div class="rm-impact" markdown>

**Impact**

- Des scores de risque 15 % plus précis
- Moins de pertes sur créances douteuses

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- :logos-scikitlearn: scikit-learn
- CatBoost
- pandas
- :logos-pytest: pytest
- :logos-sonarqube: SonarQube

</div>

### Bibliothèque de scoring partagée { #scoring-library data-one="La bibliothèque partagée de l'équipe pour construire des modèles de scoring." data-head="Moins d'erreurs de code" }

La bibliothèque interne de l'équipe pour construire les modèles de scoring, avec tests, livraison automatisée et documentation.

<div class="rm-impact" markdown>

**Impact**

- Moins d'erreurs de code entre équipes
- Des projets suivants livrés plus vite

</div>

<div class="rm-stack" markdown>

- :logos-python: Python
- :logos-gitlab: GitLab CI
- :logos-pytest: pytest
- :logos-sonarqube: SonarQube

</div>

## :logos-ulille: Université de Lille { #universite-de-lille-ater data-years="2015 – 2016" data-key="Enseignement et recherche à l’université" }

Attaché temporaire d’enseignement et de recherche · 2015 – 2016 · Lille
{ .rm-meta }

Un contrat d’un an d’enseignement et de recherche à l’Université de Lille.

## :logos-ulille: Université de Lille { #universite-de-lille data-years="2012 – 2016" data-key="Doctorat en mathématiques" }

Doctorat en mathématiques · 2012 – 2016 · Lille
{ .rm-meta }

Un doctorat en mathématiques à l’Université de Lille.
