---
# CONCEPT (case text): based on the README. Context and team confirmed by Quinten; role based on the repo. TODO: Quinten checks the text.
title: CineMatch
summary: AI agent that helps you decide which film to watch.
year: 2026
month: 4 # concept: month the repo was created
type: AI agent # concept
context: school
team: false
role: Full-stack developer
stack: [LangChain, Azure OpenAI, Express, OMDb API]
video: /projects/cinematch/preview.mp4
cover: ./cinematch/1.png # chat with film suggestions, also the video poster
gallery: [./cinematch/1.png, ./cinematch/2.png]
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
