export type OutlinePage = {
  number: number;
  title: string;
};

export type OutlinePart = {
  id: string;
  title: string;
  summary: string;
  pages: OutlinePage[];
};

export const parts: OutlinePart[] = [
  {
    id: "0",
    title: "Start here",
    summary: "Who the course is for, how to read it, and what to have open.",
    pages: [
      { number: 1, title: "Who this is for and what you'll be able to do" },
      { number: 2, title: "How to read this site (fast path vs deep path)" },
      { number: 3, title: "The whole map on one page" },
      { number: 4, title: "What you need: accounts, a laptop, free tools" },
    ],
  },
  {
    id: "1",
    title: "Generative AI",
    summary: "What a generative model is, what it can see, and what a reply costs.",
    pages: [
      { number: 1, title: 'What "generative AI" means' },
      { number: 2, title: "LLMs and tokens: predicting the next piece" },
      { number: 3, title: "Training vs using a model" },
      { number: 4, title: "Why it's confidently wrong (hallucination)" },
      { number: 5, title: "The context window: what the model can see right now" },
      { number: 6, title: "It doesn't remember you (and how apps fake memory)" },
      { number: 7, title: "Text, image, audio and code models" },
      { number: 8, title: "The model families as of Sept 2026: GPT, Claude, Gemini, Grok, Llama, Qwen" },
      { number: 9, title: "Tokens cost money: pricing, limits, rate limits" },
      { number: 10, title: "Chat app vs API: the same model, two doors" },
      { number: 11, title: "Tools and agents in one page" },
      { number: 12, title: "Recap and quiz" },
    ],
  },
  {
    id: "2",
    title: "Prompting",
    summary: "How to ask for a task, give context, and name the shape of the answer.",
    pages: [
      { number: 1, title: "Anatomy of a good prompt" },
      { number: 2, title: "Give examples (few-shot)" },
      { number: 3, title: "Ask for structure: lists, tables, JSON" },
      { number: 4, title: "Plan first: ask it to think in steps" },
      { number: 5, title: "Give it the right context" },
      { number: 6, title: "Iterate: the second prompt matters more" },
      { number: 7, title: "System prompts and custom instructions" },
      { number: 8, title: "Prompting for code specifically" },
      { number: 9, title: "Three bad prompts, made good" },
      { number: 10, title: "Prompt injection: when text attacks your agent" },
      { number: 11, title: "A reusable prompt template library" },
      { number: 12, title: "Recap and quiz" },
    ],
  },
  {
    id: "3",
    title: "The tools",
    summary: "What VS Code, Cursor, Antigravity, and Claude Code do with your files.",
    pages: [
      { number: 1, title: "What an AI coding tool actually does" },
      { number: 2, title: "Editor agents vs terminal agents" },
      { number: 3, title: "VS Code and extensions" },
      { number: 4, title: "Cursor tour: chat, agent, tab, rules, hooks" },
      { number: 5, title: "Google Antigravity tour" },
      { number: 6, title: "Claude Code tour" },
      { number: 7, title: "Comparison table: which to use when" },
      { number: 8, title: "Choosing the model inside the tool" },
      { number: 9, title: "Before you start: git, a clean folder, one project per window" },
      { number: 10, title: "Reading a diff and accepting changes safely" },
      { number: 11, title: "Plans, usage limits and cost" },
      { number: 12, title: "Recap and quiz" },
    ],
  },
  {
    id: "4",
    title: "Vibe coding",
    summary: "How describe-run-react prototyping works, and where it stops being enough.",
    pages: [
      { number: 1, title: "What vibe coding is (and where the term came from)" },
      { number: 2, title: "The vibe loop: describe, run, react" },
      { number: 3, title: "Where it shines: prototypes, demos, internal tools" },
      { number: 4, title: 'The "90% done" wall' },
      { number: 5, title: "Git is your undo button" },
      { number: 6, title: "Keep each ask small" },
      { number: 7, title: "How to describe a bug so an agent can fix it" },
      { number: 8, title: "Reading code you didn't write" },
      { number: 9, title: "Case study: a prototype that looked finished but wasn't" },
      { number: 10, title: "From vibe coding to engineering: what changes" },
      { number: 11, title: "Recap and quiz" },
    ],
  },
  {
    id: "5",
    title: "Skills and instructions",
    summary: "How rules, skills, and a spec keep an agent on the job you meant.",
    pages: [
      { number: 1, title: "Why agents need written instructions" },
      { number: 2, title: "Rules files: .cursor/rules, CLAUDE.md, AGENTS.md" },
      { number: 3, title: "What to put in a rules file (and what not)" },
      { number: 4, title: "Skills: packaged instructions (SKILL.md)" },
      { number: 5, title: "Slash commands and reusable workflows" },
      { number: 6, title: "The spec (docs/SPEC.md) as the source of truth" },
      { number: 7, title: "Task cards: one job, the files allowed, how to know it's done" },
      { number: 8, title: "Keeping instructions short and true" },
      { number: 9, title: "When rules conflict" },
      { number: 10, title: "A starter instruction kit you can copy" },
      { number: 11, title: "Recap and quiz" },
    ],
  },
  {
    id: "6",
    title: "Frontend and backend",
    summary: "How a website is split between the browser and the server.",
    pages: [
      { number: 1, title: "What happens when you open a website" },
      { number: 2, title: "Client and server" },
      { number: 3, title: "Frontend: HTML, CSS, JavaScript" },
      { number: 4, title: "Backend: what servers do" },
      { number: 5, title: "Requests and responses" },
      { number: 6, title: "Where apps live: hosting" },
      { number: 7, title: "Environments: local, staging, production" },
      { number: 8, title: "The full-stack map of a real app" },
      { number: 9, title: "Where AI goes wrong: faking the backend" },
      { number: 10, title: "Walk-through: one button click, end to end" },
      { number: 11, title: "Logs and debugging across the stack" },
      { number: 12, title: "Recap and quiz" },
    ],
  },
  {
    id: "7",
    title: "APIs and databases",
    summary: "How programs talk over HTTP, and how rows of data live in a database.",
    pages: [
      { number: 1, title: "What an API is" },
      { number: 2, title: "REST: methods, URLs and status codes" },
      { number: 3, title: "JSON" },
      { number: 4, title: "Calling an API from code (fetch)" },
      { number: 5, title: "Building an endpoint" },
      { number: 6, title: "API keys and auth headers" },
      { number: 7, title: "Databases: tables, rows, keys" },
      { number: 8, title: "SQL in 15 minutes" },
      { number: 9, title: "ORMs and migrations" },
      { number: 10, title: "Postgres and Supabase" },
      { number: 11, title: "SQL vs NoSQL" },
      { number: 12, title: "Recap and quiz" },
    ],
  },
  {
    id: "8",
    title: "Security and payment gateways",
    summary: "How to keep secrets, user data, and card payments from leaking.",
    pages: [
      { number: 1, title: "Secrets and .env: never commit keys" },
      { number: 2, title: "Authentication: sessions, JWT, OAuth, magic links" },
      { number: 3, title: "Authorization: can this user see this row?" },
      { number: 4, title: "Validate every input" },
      { number: 5, title: "The common attacks in plain words (OWASP Top 10)" },
      { number: 6, title: "HTTPS, CORS and cookies" },
      { number: 7, title: "AI-specific risks" },
      { number: 8, title: "How payment gateways work" },
      { number: 9, title: "Checkout, subscriptions, and why card data never touches your server" },
      { number: 10, title: "Webhooks, signatures and idempotency" },
      { number: 11, title: "Test mode vs live mode, and going live" },
      { number: 12, title: "Recap and quiz" },
    ],
  },
  {
    id: "9",
    title: "React, Next.js and Angular",
    summary: "How React, Next.js, and Angular structure a user interface.",
    pages: [
      { number: 1, title: "Why frameworks exist" },
      { number: 2, title: "Components" },
      { number: 3, title: "Props and state" },
      { number: 4, title: "React hooks you'll see everywhere" },
      { number: 5, title: "Next.js: routes and the App Router" },
      { number: 6, title: "Server components vs client components" },
      { number: 7, title: "Fetching data and loading states" },
      { number: 8, title: "Forms and mutations" },
      { number: 9, title: "Angular in brief, and when teams choose it" },
      { number: 10, title: "Vue and Svelte in one page" },
      { number: 11, title: "Which to pick" },
      { number: 12, title: "Recap and quiz" },
    ],
  },
  {
    id: "10",
    title: "Loop engineering",
    summary: "How to run an agent in a loop with a spec, a check, and a commit.",
    pages: [
      { number: 1, title: "Why one prompt can't build a product" },
      { number: 2, title: "The loop: spec, task, build, check, commit" },
      { number: 3, title: "Writing the spec first" },
      { number: 4, title: "Task cards that a cheap model can finish" },
      { number: 5, title: "Locked tests: done is decided before the code" },
      { number: 6, title: "Gates: deterministic checks after every step" },
      { number: 7, title: "Stop hooks: the harness decides what happens next" },
      { number: 8, title: "Maker vs checker" },
      { number: 9, title: "Retries, escalation and blocked" },
      { number: 10, title: "Additive-only changes and scope limits" },
      { number: 11, title: "Running several agents in parallel" },
      { number: 12, title: "Recap and quiz" },
    ],
  },
  {
    id: "11",
    title: "Mixing models",
    summary: "How to split work between a strong model and a fast one.",
    pages: [
      { number: 1, title: "Strong models vs fast models" },
      { number: 2, title: "The cost, speed and quality triangle" },
      { number: 3, title: "Who plans, who builds, who reviews" },
      { number: 4, title: "A real split: spec and review on a strong model, build on a fast one" },
      { number: 5, title: "Cross-model review catches different mistakes" },
      { number: 6, title: "When to escalate to the strong model" },
      { number: 7, title: "Why benchmarks mislead: test on your tasks" },
      { number: 8, title: "A day's workflow with two models" },
      { number: 9, title: "Failure modes of mixing" },
      { number: 10, title: "Recap and quiz" },
    ],
  },
  {
    id: "12",
    title: "Enforcing rules",
    summary: "How to turn a written rule into a check an agent cannot skip.",
    pages: [
      { number: 1, title: "Rules are requests; enforcement is code" },
      { number: 2, title: "Linters, formatters and type checks" },
      { number: 3, title: "Tests and CI (GitHub Actions)" },
      { number: 4, title: "Pre-commit hooks" },
      { number: 5, title: "Agent hooks in Cursor and Claude Code" },
      { number: 6, title: "Locked files and scope limits" },
      { number: 7, title: "Secret scanning" },
      { number: 8, title: "Review checklists" },
      { number: 9, title: "Turning a rule into a check" },
      { number: 10, title: "Recap and quiz" },
    ],
  },
  {
    id: "A",
    title: "Appendix",
    summary: "Glossary, cheat sheets, launch checks, and a capstone.",
    pages: [
      { number: 1, title: "Glossary" },
      { number: 2, title: "Prompt cheat sheet" },
      { number: 3, title: "Git cheat sheet" },
      { number: 4, title: "HTTP status codes cheat sheet" },
      { number: 5, title: "Security checklist before launch" },
      { number: 6, title: "Launch checklist" },
      { number: 7, title: "Capstone: build and ship a small paid app with an agent loop" },
      { number: 8, title: "Further reading" },
    ],
  },
];

export const PLANNED_PAGE_COUNT = parts.reduce((sum, part) => sum + part.pages.length, 0);

if (PLANNED_PAGE_COUNT !== 150) {
  throw new Error(`Outline has ${PLANNED_PAGE_COUNT} pages; the course plan is 150.`);
}

export function partRank(id: string): number {
  if (id === "A") return 13;
  const rank = Number(id);
  return Number.isInteger(rank) ? rank : 99;
}

export function getOutlinePart(id: string): OutlinePart | undefined {
  return parts.find((part) => part.id === id);
}

export function partLabel(id: string): string {
  return id === "A" ? "Appendix" : `Part ${id}`;
}

export function partHeading(id: string, title: string): string {
  const label = partLabel(id);
  return title === label ? label : `${label}: ${title}`;
}
