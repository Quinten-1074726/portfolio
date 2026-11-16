---
# CONCEPT (data + case text): based on CLAUDE.md and the GitHub repo. TODO: Quinten checks.
title: CineMatch
summary: AI agent that helps you choose a film, using document retrieval, tools and the OMDb API.
year: 2026
month: 4 # concept: month the repo was created
type: school
stack: [LangChain, Azure OpenAI, Express, OMDb API]
featured: false
order: 2
repo: Quinten-1074726/PRG08-Opdrachten
---

## About the project

Many people don't know which film they want to watch and end up searching for ages. CineMatch is an AI agent that helps you choose, by giving focused advice and showing real film information.

Unlike a regular language model, this agent can:

- retrieve information from a document about film genres (document retrieval with a vector store)
- fetch real film data through the OMDb API
- use tools to carry out actions
