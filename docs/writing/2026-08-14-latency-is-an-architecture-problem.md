---
title: Latency is an architecture problem, not a prompt problem
template: article.html
description: Why the biggest latency win in a production multi-agent system rarely comes from prompt optimization.
description_fr: Pourquoi le plus gros gain de latence d'un système multi-agents en production vient rarement de l'optimisation des prompts.
topic: Agents and architecture
also:
  - Medium: https://medium.com/@rafik_23044
  - dev.to: https://dev.to/rafik_mammeri
takeaways:
  - Most of the wait comes from model calls made before the one that helps the user.
  - Deterministic routing and native handoffs brought most messages down to one or two LLM calls.
  - Keep a model in the routing only where the decision is genuinely ambiguous.
field_project: Shopping assistant, first generation
field_url: /experience/#shopping-assistant
field_detail: Multi-agent assistant on the website and mobile apps, about 2,000 conversations a day.
field_stack:
  - LangGraph
  - OpenAI
  - Python
share_quote: Every single message pays for two or three sequential LLM round-trips before the user sees a token.
share_question: How many model calls does one message trigger in your agent before anything useful happens?
tags:
  - LangGraph
  - Multi-agent systems
  - Production LLMs
---

Most teams shipping their first multi-agent LLM system reach for the same fix when latency becomes a problem: trim the prompt, switch to a faster model, cache more aggressively. Those help at the margins. They rarely fix the actual problem, because the actual problem is usually structural, not textual.

## The naive shape almost everyone starts with

A common first design for routing a user message to the right specialized agent looks like this:

```mermaid
flowchart TB
    A[User message] --> B["Orchestrator<br>LLM call: <i>which agent should handle this?</i>"]
    B --> C["Specialized agent<br>LLM call: generates the actual response"]
    C --> D["Formatter<br>sometimes a third LLM call, to shape the output"]
```

It's a reasonable design on a whiteboard — separation of concerns, one job per node. In production, it means **every single message pays for two or three sequential LLM round-trips before the user sees a token**, even for something as simple as "what are your opening hours."

!!! tip "The tell"
    If your latency budget is dominated by "time waiting for an LLM to decide something," before any LLM call that actually helps the user, you're paying an architecture tax — not a prompt tax.

## What changes when routing is native, not delegated

The fix that actually moved the needle on a production conversational assistant handling about 2,000 conversations a day[^1] wasn't a better router prompt. It was removing the router's LLM call entirely for the common case:

```mermaid
flowchart TB
    A[User message] --> B["Router identifies domain<br>(no LLM classification call)"]
    B --> C["Correct specialized agent activated<br>(no intermediate LLM call to get there)"]
    C --> D["Agent responds<br>(1–2 LLM calls total)"]
    D -- on topic change --> E["Native handoff<br>conversation state carried over<br>no restart, no re-explaining context"]
    E --> C
```

The router still exists — it still has to figure out which agent should own a message. What changed is *how* it decides: deterministic signal matching and graph-native routing where possible, instead of asking a general-purpose LLM to classify intent on every single turn. The handoff between agents, when a conversation genuinely changes topic mid-flow, is also native to the orchestration graph rather than a fresh LLM call bolted on top — so switching agents doesn't mean losing the conversation's accumulated context.

!!! success inline end "The result"
    One to two LLM calls per message, instead of three or more.

The result: most messages resolve in **one to two LLM calls total**, versus the three or more an orchestrator-first design needs. That's not a 10% latency improvement from a leaner prompt — ==it's removing a whole category of round-trip.==

## Why this is easy to miss

Prompt-level optimization is visible and satisfying: you can diff two prompts, run an eval, see a number move. Architectural latency is invisible until you actually trace a request end to end and count how many times you're calling out to a model before anything useful happens. It's also easy to under-count, because "just one more classification step" always looks cheap in isolation — it's the sum across the whole conversation flow that hurts.

The practical habit that catches this, before optimizing any single prompt:

- [ ] Draw the actual sequence of LLM calls a real message triggers, node by node.
- [ ] Include the ones that feel like plumbing: classification, formatting, validation.
- [ ] For each full LLM call, ask whether it could be a rule, a smaller and cheaper model, or a native part of the orchestration layer.

If more than one of those nodes could, that's where the latency budget is actually going.

## Where this doesn't apply

This isn't an argument against ever using an LLM to route. Genuinely ambiguous, open-ended intent classification across a large number of possible destinations often *does* need a model's judgment — a hard-coded ruleset won't scale to that. The distinction that matters is between routing decisions that are **inherently ambiguous** (worth an LLM call) and ones that are **incidentally implemented as an LLM call** because it was the fastest way to prototype the system. The second category is where the free latency wins live, and in most production systems I've seen, it's a larger category than teams expect going in.

| Routing decision | Example | Worth an LLM call? |
| :-- | :-- | :-- |
| Incidentally implemented as an LLM call | "What are your opening hours?" | No, a rule does it |
| Inherently ambiguous | Open-ended intent across many possible destinations | Yes |

[^1]: A production conversational assistant on the website and mobile apps; the figure is from spring 2026.

*[router]: The part that picks which specialised agent should answer a message.
*[orchestrator]: The component that decides which agent or tool handles each step of a conversation.
*[round-trips]: Calls to a model and back, from the request to the complete answer.
*[handoff]: Passing a conversation from one agent to another, with its state and context.
*[latency budget]: The time a system can take before the user feels the wait.
