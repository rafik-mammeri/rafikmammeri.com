---
title: Evals before features
template: article.html
demo: true
description: A small, boring evaluation bench saves more time than any new capability you ship.
description_fr: Un petit banc d'évaluation, sans éclat, fait gagner plus de temps que n'importe quelle nouvelle fonctionnalité.
topic: Running in production
takeaways:
  - Write the evaluation before the feature it measures.
  - A small fixed set of real cases beats a large synthetic one.
  - Run it on every prompt or model change, like unit tests.
share_quote: If a change cannot be tested in five minutes, it will not be tested at all.
share_question: What tells your team that a prompt change made the agent better, not just different?
tags:
  - Evaluation
  - LLMOps
  - Production LLMs
---

!!! danger "Demo article"
    This article is a placeholder written to show what an article page can hold: every native element of the site in one place. It is not a published article, and its cases and numbers are illustrative.

Most teams add capabilities to an agent faster than they can tell whether the last change made it better or worse. The fix is not glamorous: ==a small evaluation bench, written before the feature it measures==, and run on every change.

## What a bench looks like

A bench is a fixed list of real conversations, each with what a good answer must contain. It is small on purpose (1), so that it runs in minutes and someone actually reads the failures.
{ .annotate }

1.  Around forty cases is enough to start. The value is in running it every time, not in its size.

=== "A case"

    ``` yaml title="bench/opening-hours.yaml"
    input: "Are you open on Sunday?"
    must_contain: ["Sunday", "hours"]
    must_not: ["I don't know"]
    route: store_info   # (1)!
    ```

    1.  The route is checked too: a right answer from the wrong agent is a hidden cost.

=== "The runner"

    ``` python title="bench/run.py" linenums="1" hl_lines="5 6"
    def run(cases, agent):
        failures = []
        for case in cases:
            answer = agent(case.input)
            if not case.passes(answer):
                failures.append((case, answer))
        return failures
    ```

Run it with ++cmd+enter++ in the notebook, or `#!bash make bench` in CI.

## Where it sits in the loop

``` mermaid
flowchart LR
    A[Change a prompt or model] --> B[Run the bench]
    B -->|all pass| C[Ship]
    B -->|failures| D[Read them]
    D --> A
```

!!! tip "Read the failures, not the score"
    A score going from 92% to 94% says little. The three cases that started failing say exactly what broke.

!!! info inline end "Why real cases"
    Synthetic cases test what you already imagined. Real ones test what users actually say.

The cases come from production traces[^1], chosen to cover each route and each known failure. When a new bug is found, its conversation joins the bench, so it cannot come back unnoticed. Over time the bench becomes the most precise description of what the agent is supposed to do.

## Before and after

<div class="grid cards" markdown>

-   :lucide-shuffle: **Without a bench**

    ---

    Each change is judged by trying a few messages by hand. Regressions surface in production, weeks later.

-   :lucide-shield-check: **With a bench**

    ---

    Each change is judged on the same cases. Regressions surface in minutes, before shipping.

</div>

| | Without a bench | With a bench |
| :-- | :-: | :-: |
| Time to judge a change | an afternoon | a few minutes |
| Regressions found | in production | before shipping |
| Confidence to change prompts | low | high |

## Starting tomorrow

- [x] Pick forty real conversations from last week
- [x] Write what each good answer must contain
- [ ] Run them on every prompt or model change
- [ ] Add every new bug's conversation to the list

Bench
:   A fixed set of real cases, each with the conditions a good answer must meet.

Regression
:   A case that passed before a change and fails after it.

??? example "A failure, read closely"
    The case "Are you open on Sunday?" started failing after a prompt change. The answer was correct, but it came from the general agent instead of the store agent: the new prompt had made the router ~~hesitate~~ ^^fall back^^ on short questions.

!!! quote "A rule of thumb"
    If a change cannot be tested in five minutes, it will not be tested at all.

This connects to [latency as an architecture problem](2026-08-14-latency-is-an-architecture-problem.md): the bench is what makes it safe to remove a model call from the router.

[Read about latency](2026-08-14-latency-is-an-architecture-problem.md){ .md-button .md-button--primary } [All articles](../articles.md){ .md-button }

*[bench]: A fixed set of real cases run on every change.
*[traces]: Recordings of each step a request went through, with timings.

[^1]: Traces are recordings of every step a conversation went through, with the model calls and their timings.
