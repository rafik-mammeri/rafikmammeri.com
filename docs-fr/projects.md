---
title: "Projets"
description: "Des agents IA en production : voice bot du service client, deux générations d'assistant d'achat, analyse de données en langage naturel, agents internes."
hide:
  - navigation
  - toc
---

# Projets

Quatre produits IA en production. Pour chacun : le contexte, ce que j'ai fait, et ce que ça a changé.
{ .rm-lede }

## Voice bot du service client { #voice-bot }

2026 · Voix
{ .rm-meta }

Remplacer le serveur vocal à touches du service client par une conversation naturelle.
{ .rm-lead }

<div class="rm-figures" markdown>

- **3 jours** pour prendre 100 % des appels entrants
- **Des milliers** d'appels traités chaque jour
- **4×** plus d'appels résolus sans conseiller que prévu

</div>

### Ce que j'ai fait

- Impliqué de l'appel d'offres à la production
- Conçu l'architecture qui garde la logique métier et l'accès aux données dans l'entreprise, le fournisseur ne gérant que la voix
- Recommandé un lancement progressif
- Analysé la première journée d'appels et livré cinq correctifs en 48 heures

### Ce que ça a changé

81 % des appels transférés arrivent au conseiller avec le motif déjà identifié.
{ .rm-result }

<div class="rm-stack" markdown>

- :logos-langgraph: LangGraph
- :logos-claude: Claude
- :logos-python: Python
- :logos-fastapi: FastAPI
- :logos-kubernetes: Kubernetes
- :logos-mongodb: MongoDB

</div>

## Assistants d'achat, web et mobile { #shopping-assistants }

2025 – 2026 · Web et mobile
{ .rm-meta }

Remplacer un chatbot à scénarios par un assistant génératif couvrant conseil, commandes et après-vente.
{ .rm-lead }

<div class="rm-figures" markdown>

- **~2 000** conversations par jour
- **78 %** d'avis positifs
- **6 mois** du lancement à la production

</div>

### Ce que j'ai fait

- Première génération : architecture multi-agents, contrat d'API négocié avec les équipes web, iOS et Android, en production en six mois
- Seconde génération : lead produit IA du programme ; j'ai convaincu les équipes après-vente de rejoindre la même plateforme

### Ce que ça a changé

Un seul assistant pour la vente et l'après-vente, au lieu de projets séparés.
{ .rm-result }

<div class="rm-stack" markdown>

- :logos-langgraph: LangGraph
- :logos-azure: Azure OpenAI
- :logos-python: Python
- :logos-fastapi: FastAPI
- :logos-kubernetes: Kubernetes
- :logos-mongodb: MongoDB

</div>

## Self-BI : les données en langage naturel { #self-bi }

2026 · Data
{ .rm-meta }

Les équipes métier attendaient les analystes pour obtenir leurs chiffres.
{ .rm-lead }

### Ce que j'ai fait

- Lancé le projet et l'ai mené avec les équipes data jusqu'à la production
- Un serveur MCP sécurisé en quatre couches
- Règles métier reprises des tableaux de bord existants, puis vérifiées contre eux
- Modèle choisi par comparaison à l'aveugle

### Ce que ça a changé

Des chiffres alignés sur les tableaux de bord officiels, et une architecture devenue la cible de l'entreprise.
{ .rm-result }

<div class="rm-stack" markdown>

- :logos-modelcontextprotocol: MCP
- :logos-gemini: Gemini
- :logos-snowflake: Snowflake
- :logos-googlecloud: Google Cloud
- :logos-python: Python

</div>

## Agents internes { #internal-agents }

2026 · Collaborateurs
{ .rm-meta }

Donner aux collaborateurs des assistants dans l'outil qu'ils utilisent déjà chaque jour.
{ .rm-lead }

### Ce que j'ai fait

- Construit la passerelle entre la messagerie interne et les agents
- L'assistant RH officiel appartient aux RH : contenu, périmètre et validation

### Ce que ça a changé

Ouvert à tous les collaborateurs depuis novembre 2026, avec quatre agents conçus par les métiers eux-mêmes.
{ .rm-result }

<div class="rm-stack" markdown>

- :logos-gemini: Gemini
- :logos-googlecloud: Google Cloud
- :logos-python: Python

</div>
