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

## :logos-boulanger: Boulanger { #boulanger data-years="2025 – aujourd'hui" data-lead="Tech lead d'une équipe d'ingénieurs IA" data-key="Voice bot : plus de 50 000 appels sur ses six premiers jours" }

Lead AI Engineer · avril 2025 – aujourd'hui · Lille
{ .rm-meta }

Tech lead d'une équipe d'ingénieurs IA qui construit et fait tourner les agents IA de l'entreprise, pour les clients et pour les collaborateurs.

### Voice bot du service client { #voice-bot data-one="L'IA conversationnelle de la ligne du service client." data-head="50 000 appels en 6 jours" }

L'IA conversationnelle derrière la ligne du service client, en production depuis le 28 octobre 2026. Je la porte de bout en bout : architecture, code, intégrations, authentification des clients, supervision et analyse de production, en lien avec le fournisseur de la voix et les équipes du service client. Impliqué dès l'appel d'offres fin 2025, j'ai co-conçu l'architecture qui garde la logique métier et les données clients dans l'entreprise. L'agent est connecté à 15 services internes, du suivi de commande et des réparations aux factures, à la fidélité, aux magasins et au catalogue.

<div class="rm-impact" markdown>

**Impact**

- Passage de 25 % à 100 % des appels entrants en trois jours, une montée en charge progressive que j'ai recommandée
- Plus de 50 000 appels sur les six premiers jours, 98 % pris en charge par l'IA
- Plus de 10 % des appels résolus sans conseiller dès le deuxième jour, contre 2 % prévus
- Cinq correctifs en 48 heures après la première journée, qui ont fait baisser les abandons de plus d'un tiers

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

### Assistant d'achat, première génération { #shopping-assistant data-one="Un assistant génératif pour le conseil, les commandes et l'après-vente, sur le web et les apps." data-head="2 000 conversations par jour" }

Un assistant génératif sur le site et les applications mobiles, pour le conseil produit, les commandes et l'après-vente, à la place d'un chatbot à scénarios. Conception multi-agents, et un contrat d'API négocié avec les équipes web, iOS et Android.

<div class="rm-impact" markdown>

**Impact**

- En production en six mois ; environ 2 000 conversations par jour au printemps 2026
- 78 % d'avis positifs des clients
- Le chat est devenu un volet standard de chaque nouveau projet informatique

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
- :logos-pydantic: Pydantic
- :logos-ruff: Ruff
- :logos-pytest: pytest
- :logos-sonarqube: SonarQube

</div>

### Assistant d'achat, seconde génération { #shopping-agent data-one="La vente et l'après-vente dans un seul assistant, sur le web et le mobile." data-head="Test A/B sur 50 % du trafic" }

Je mène le programme comme lead produit IA : assistant de vente, après-vente guidé, entretien des produits, et passage sur la plateforme standard de l'entreprise.

<div class="rm-impact" markdown>

**Impact**

- Un seul assistant pour la vente et l'après-vente, au lieu d'intégrations séparées
- A/B test sur 50 % du trafic du site depuis octobre 2026
- Applications iOS et Android en production depuis le 3 novembre 2026

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

### Self-BI : les données en langage naturel { #self-bi data-one="Les équipes métier interrogent l'entrepôt de données en langage naturel." data-head="Réponses en 60 s au lieu de 150" }

J'ai lancé le projet et l'ai mené jusqu'à la production avec les équipes data : les équipes métier interrogent l'entrepôt de données en langage naturel dans Gemini Enterprise, via un serveur MCP interne. L'accès est sécurisé en quatre couches, de l'authentification des utilisateurs par OAuth 2.0 et OpenID Connect au contrôle d'accès par rôle (RBAC) sur les données.

<div class="rm-impact" markdown>

**Impact**

- Deux périmètres métier en production ; un nouveau périmètre s'ajoute en trois jours environ
- Des réponses sans attendre un analyste, avec des chiffres alignés sur les tableaux de bord officiels
- Temps de réponse médian passé de 150 à 60 secondes grâce à des outils spécialisés
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

### Chatbot de support client { #support-chatbot data-one="Répond aux demandes de support avant qu'elles n'arrivent à un conseiller." data-head="65 % des demandes automatisées" }

Répond aux demandes des clients à partir de la base de connaissances du support, avant qu'elles n'arrivent à un conseiller, avec un modèle de langage affiné.

<div class="rm-impact" markdown>

**Impact**

- 65 % des demandes entrantes traitées automatiquement
- 40 % de charge en moins pour les équipes support
- Un support disponible 24 h/24

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
- 15 % de coûts d'exploitation en moins

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
