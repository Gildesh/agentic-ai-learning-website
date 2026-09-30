# Rebuild prompt: "From Gen AI to Shipping Real Software", a 150-page illustrated course site

> Paste everything below the line into a new agent chat (Claude Code or Cursor) opened on this repo.
> Work in the phases at the end. Do one Part per session; commit after each Part.

---

## Your job

Rebuild this Next.js site into a **150-page illustrated course** that takes a smart beginner from
"what is generative AI?" to "I can direct AI agents to build, secure and ship a real full-stack app, and enforce the rules they follow".

The current content (`content/lessons/*.mdx`, 17 lessons) **failed** and is being replaced. Read two of those lessons first so you
recognise the failure, then move them all to `archive/lessons-v1/` (don't delete them). Here's what went wrong. Never do any of it:

1. **It avoided real words.** Across 23,000 words, "Cursor", "API", "React", "database", "frontend" and "Stripe" appeared 17 times in total.
   A learner who finishes it cannot follow a single real tutorial.
2. **It invented its own vocabulary** ("beat", "desk", "spine", "wrapper", "finish line", "Sunday digest"). Nobody in the industry says these.
3. **It ran on a fictional character** ("Sam", 121 mentions) and long stories instead of explanation.
4. **It covered two ideas, stretched to 23,000 words.** The word-count gate rewarded padding.
5. **It had seven box-and-arrow drawings** for 17 lessons.

## Reader

A smart adult with no programming background (for example a business student or a founder) who wants to direct AI coding
agents well. They're comfortable with a laptop and a browser. They'll read on a phone and on a laptop. They are NOT a child:
don't be cute and don't talk down.

## Voice and style (hard rules)

- **Use the real industry term, then explain it.** Pattern: "An **API** (Application Programming Interface) is ... In practice ..."
  Every term a reader would meet in a real tutorial gets named, in bold, the first time, and linked to the glossary.
- **Short pages.** 250–700 words of prose per page. One idea per page. If a page needs more, split it.
- **Concrete before abstract.** Open each page with a real, specific situation (a real tool, a real error message,
  a real snippet), THEN the general idea.
- **No recurring fictional characters, no invented jargon, no extended metaphors.** A single short analogy is allowed when it
  helps, and must be followed by the real mechanism.
- **Show real artefacts:** code snippets (short, runnable, commented), terminal output, HTTP requests/responses, file trees,
  folder layouts, config files (`.env`, `CLAUDE.md`, `.cursor/rules/*.mdc`), SQL, JSON.
- **Be accurate and dated.** Tools and models change monthly. Any claim about a product (features, pricing, model names) must
  match the product's official docs. Add `lastChecked: 2026-09` to the page frontmatter, and phrase comparisons as
  "as of September 2026". If you can't verify a detail, leave it out; don't guess.
- Plain, confident, friendly. Second person ("you"). No filler ("In today's fast-paced world..."), no hype, no emojis.

### Calibration: rewrite this
Bad (old site): "The model is continuing a pattern in text. It has met the word strawberry in oceans of sentences..."
Good: "A **large language model (LLM)** predicts the next **token** (a chunk of a word) over and over. Ask it 'How many r's are in
strawberry?' and it predicts what an answer *looks like*. It doesn't count letters, because it sees tokens like `straw` + `berry`,
not individual letters. That's why it can say 'two' with total confidence. **Fix:** ask it to spell the word out letter by letter first,
or use a tool (code) that actually counts."

## Page template (every page)

Frontmatter:
```yaml
part: 7                 # 0-12, or "A" for the appendix
number: 3               # position inside the part
slug: rest-methods-and-status-codes
title: "REST: methods, URLs and status codes"
summary: "One sentence: what the reader can do after this page."
minutes: 6
terms: [API, REST, HTTP method, status code, endpoint]   # every term must exist in lib/glossary.ts
lastChecked: 2026-09
```
Body sections, in this order:
1. **Hook**: 2–4 sentences with a real situation.
2. **The idea**: the explanation, using real terms.
3. **Figure**: at least one illustration component (see Illustrations). Every page gets its OWN figure; never reuse one.
4. **Real example**: a snippet, a file, a request/response, or a tool screen description, with annotations.
5. **Try it (5 minutes)**: one small hands-on action with a free tool (a prompt to paste, a file to create, a URL to open).
6. **Common mistake**: one `<Mistake>` callout: what beginners (and AI agents) get wrong, and how to spot it.
7. **Key terms**: auto-rendered from `terms`.
End of each Part: a recap page with a 5-question quiz (`<Quiz>`) and a one-page cheat sheet.

## Illustrations (at least 150, one per page)

Build a small, consistent SVG figure library in `components/figures/` (reuse the existing `FigureFrame` style as the base).
Provide these reusable primitives, then compose a unique figure per page:
- `Flow` (boxes and arrows, left to right or top to bottom), `Sequence` (actor lanes with numbered messages, e.g. browser, server, Stripe),
  `Stack` (layered architecture), `Compare` (2–4 column comparison table with icons), `Annotated` (a mock window: editor,
  terminal, browser or chat, with numbered callouts), `Tree` (folder structures), `Timeline`, `Matrix` (2×2).
- Every figure: a title, a one-line caption, `role="img"` and an `aria-label`, readable at 360px width, and it works in dark and light mode.
- Mock screens of tools (Cursor, VS Code, Claude Code, Antigravity) are drawn schematically with generic shapes. Don't copy logos or
  screenshots, and don't imply official branding.

## Table of contents (150 pages; follow it, and adjust titles only if accuracy requires it)

**Part 0: Start here (4)**
0.1 Who this is for and what you'll be able to do · 0.2 How to read this site (fast path vs deep path) · 0.3 The whole map on one page
(all 12 parts in one figure) · 0.4 What you need: accounts, a laptop, free tools

**Part 1: Generative AI (12)**
1.1 What "generative AI" means · 1.2 LLMs and tokens: predicting the next piece · 1.3 Training vs using a model · 1.4 Why it's confidently wrong
(hallucination) · 1.5 The context window: what the model can see right now · 1.6 It doesn't remember you (and how apps fake memory)
· 1.7 Text, image, audio and code models · 1.8 The model families as of Sept 2026: GPT, Claude, Gemini, Grok, Llama, Qwen · 1.9 Tokens cost money:
pricing, limits, rate limits · 1.10 Chat app vs API: the same model, two doors · 1.11 Tools and agents in one page · 1.12 Recap + quiz

**Part 2: Prompting (12)**
2.1 Anatomy of a good prompt (role, task, context, constraints, output format) · 2.2 Give examples (few-shot) · 2.3 Ask for structure:
lists, tables, JSON · 2.4 Plan first: ask it to think in steps · 2.5 Give it the right context (files, docs, errors) · 2.6 Iterate: the
second prompt matters more · 2.7 System prompts and custom instructions · 2.8 Prompting for code specifically · 2.9 Three bad prompts,
made good · 2.10 Prompt injection: when text attacks your agent · 2.11 A reusable prompt template library · 2.12 Recap + quiz

**Part 3: The tools: VS Code, Cursor, Antigravity, Claude Code (12)**
3.1 What an AI coding tool actually does (reads files, edits, runs commands) · 3.2 Editor agents vs terminal agents · 3.3 VS Code and
extensions (Copilot and others) · 3.4 Cursor tour: chat, agent, tab, rules, hooks · 3.5 Google Antigravity tour · 3.6 Claude Code tour: terminal,
CLAUDE.md, skills, hooks, subagents · 3.7 Comparison table: which to use when · 3.8 Choosing the model inside the tool · 3.9 Before you
start: git, a clean folder, one project per window · 3.10 Reading a diff and accepting changes safely · 3.11 Plans, usage limits
and cost · 3.12 Recap + quiz

**Part 4: Vibe coding (11)**
4.1 What vibe coding is (and where the term came from) · 4.2 The vibe loop: describe, run, react · 4.3 Where it shines: prototypes, demos,
internal tools · 4.4 The "90% done" wall: pretty screens over fake data · 4.5 Git is your undo button · 4.6 Small steps beat big asks
· 4.7 How to describe a bug so an agent can fix it · 4.8 Reading code you didn't write · 4.9 Case study: a prototype that looked finished
but wasn't · 4.10 From vibe coding to engineering: what changes · 4.11 Recap + quiz

**Part 5: Skills and instructions (11)**
5.1 Why agents need written instructions · 5.2 Rules files: `.cursor/rules`, `CLAUDE.md`, `AGENTS.md` · 5.3 What to put in a rules file
(and what not) · 5.4 Skills: packaged instructions (`SKILL.md`) · 5.5 Slash commands and reusable workflows · 5.6 The spec
(`docs/SPEC.md`) as the source of truth · 5.7 Task cards: one job, the files allowed, how to know it's done · 5.8 Keeping instructions short
and true · 5.9 When rules conflict · 5.10 A starter instruction kit you can copy · 5.11 Recap + quiz

**Part 6: Frontend and backend (12)**
6.1 What happens when you open a website · 6.2 Client and server · 6.3 Frontend: HTML, CSS, JavaScript · 6.4 Backend: what servers
do · 6.5 Requests and responses · 6.6 Where apps live: hosting (Vercel, Render, Railway, cloud) · 6.7 Environments: local, staging,
production · 6.8 The full-stack map of a real app · 6.9 Where AI goes wrong: faking the backend · 6.10 Walk-through: one button
click, end to end · 6.11 Logs and debugging across the stack · 6.12 Recap + quiz

**Part 7: APIs and databases (12)**
7.1 What an API is · 7.2 REST: methods, URLs and status codes · 7.3 JSON · 7.4 Calling an API from code (`fetch`) · 7.5 Building an
endpoint (Next.js route handler and FastAPI side by side) · 7.6 API keys and auth headers · 7.7 Databases: tables, rows, keys · 7.8 SQL in
15 minutes · 7.9 ORMs and migrations (Prisma, Drizzle, SQLAlchemy) · 7.10 Postgres and Supabase · 7.11 SQL vs NoSQL · 7.12 Recap + quiz

**Part 8: Security and payment gateways (12)**
8.1 Secrets and `.env`: never commit keys · 8.2 Authentication: sessions, JWT, OAuth, magic links · 8.3 Authorization: "can THIS user
see THIS row?" · 8.4 Validate every input · 8.5 The common attacks in plain words (OWASP Top 10) · 8.6 HTTPS, CORS and cookies · 8.7
AI-specific risks: prompt injection, keys leaking in error messages, unsafe tool access · 8.8 How payment gateways work (Stripe, Razorpay)
· 8.9 Checkout, subscriptions and why card data never touches your server · 8.10 Webhooks, signatures and idempotency · 8.11 Test
mode vs live mode, and going live · 8.12 Recap + quiz

**Part 9: React, Next.js and Angular (12)**
9.1 Why frameworks exist · 9.2 Components · 9.3 Props and state · 9.4 React hooks you'll see everywhere · 9.5 Next.js: routes and the App
Router · 9.6 Server components vs client components · 9.7 Fetching data and loading states · 9.8 Forms and mutations · 9.9 Angular in
brief, and when teams choose it · 9.10 Vue and Svelte in one page · 9.11 Which to pick (a comparison table) · 9.12 Recap + quiz

**Part 10: Loop engineering (12)**
10.1 Why one prompt can't build a product · 10.2 The loop: spec, task, build, check, commit · 10.3 Writing the spec first · 10.4 Task
cards that a cheap model can finish · 10.5 Locked tests: "done" is decided before the code · 10.6 Gates: deterministic checks after every
step · 10.7 Stop hooks: the harness decides what happens next · 10.8 Maker vs checker · 10.9 Retries, escalation and "blocked" · 10.10
Additive-only changes and scope limits · 10.11 Running several agents in parallel · 10.12 Recap + quiz

**Part 11: Mixing models, Claude vs Grok for coding (10)**
11.1 Strong models vs fast models · 11.2 The cost, speed and quality triangle · 11.3 Who plans, who builds, who reviews · 11.4 A real
split: a strong model writes the spec, tests and reviews; a fast model builds · 11.5 Cross-model review catches different mistakes · 11.6 When
to escalate to the strong model · 11.7 Why benchmarks mislead: test on YOUR tasks · 11.8 A day's workflow with two models · 11.9 Failure modes
of mixing · 11.10 Recap + quiz

**Part 12: Enforcing rules (10)**
12.1 Rules are requests; enforcement is code · 12.2 Linters, formatters and type checks · 12.3 Tests and CI (GitHub Actions) · 12.4
Pre-commit hooks · 12.5 Agent hooks in Cursor and Claude Code · 12.6 Locked files and scope limits · 12.7 Secret scanning · 12.8 Review
checklists · 12.9 Turning a rule into a check (worked examples) · 12.10 Recap + quiz

**Appendix (8)**
A.1 Glossary (every term used anywhere) · A.2 Prompt cheat sheet · A.3 Git cheat sheet · A.4 HTTP status codes cheat sheet · A.5
Security checklist before launch · A.6 Launch checklist · A.7 Capstone: build and ship a small paid app with an agent loop · A.8 Further
reading (official docs only)

(Part 0: 4 · Parts 1, 2, 3, 6, 7, 8, 9, 10: 12 each = 96 · Parts 4, 5: 11 each = 22 · Parts 11, 12: 10 each = 20 · Appendix: 8 → 150 pages.)

## Site structure

- Content lives in `content/pages/<part>-<number>-<slug>.mdx`. Update `lib/course.ts` to read parts and pages, and sort by (part, number).
- Routes: `/` (map of parts), `/part/[part]` (the part's overview with its page list), `/part/[part]/[slug]` (a page, with previous/next),
  `/glossary`, `/cheatsheets`. Keep the existing progress tracking and extend it to 150 pages.
- Navigation: a sidebar with parts and pages on desktop, a drawer on mobile, and a "You are here" breadcrumb. Search over titles, summaries and terms (client-side).
- Components available in MDX: `<Figure...>` primitives, `<Mistake>`, `<TryIt>`, `<Quiz>`, `<Code filename="...">`, `<Callout type="note|warn">`.

## The checker (replace `scripts/check-course.mjs`; `npm run check:course` must pass before every commit)

Fail the build if any of these are false:
- exactly 150 pages; parts and numbers are contiguous; the frontmatter is complete; `lastChecked` is present
- each page has 250–700 prose words (a hard cap, so there's no padding), exactly one Hook, a figure component, `<TryIt>`, `<Mistake>`, and 2+ `terms`
- every `terms` entry exists in `lib/glossary.ts`, and every glossary entry is used on at least one page
- no figure component is used on more than one page
- banned tokens, as whole words (case-insensitive): `Sam`, `beat`, `desk`, `spine`, `wrapper`, `finish line`; no recurring character names
- per-part must-mention terms (each at least once in that part), for example Part 3: Cursor, VS Code, Antigravity, Claude Code, diff, git;
  Part 7: API, REST, JSON, endpoint, SQL, migration; Part 8: .env, authentication, authorization, OWASP, webhook, idempotency, Stripe;
  Part 9: component, props, state, Next.js, App Router, Angular. Define a list like this for every part.
Also keep `npm run build` and `npm run lint` green.

## How to work (phases)

1. **Phase 0 (one session):** archive the old lessons, build the content model, routes, navigation, MDX components, the figure primitives,
   the glossary skeleton and the new checker. Write ONE complete sample page (7.2 REST) to prove the template. Stop and show it.
2. **Phase 1..12:** one Part per session. For each Part: add its glossary terms first, write all of its pages with their figures, run
   `npm run check:course && npm run build`, fix everything, commit `content: part N`. Don't start the next Part in the same session.
3. **Phase 13:** the appendix and cheat sheets, a pass over cross-links between pages, and a final accuracy pass over every
   product/model claim against the official docs (update `lastChecked`).

Before writing each Part, list its pages with a one-line summary each and check them against this outline. Keep each page
self-contained, but link backward to the page that introduced a term.
