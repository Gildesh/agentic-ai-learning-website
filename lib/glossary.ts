export type GlossaryEntry = {
  id: string;
  term: string;
  definition: string;
  part: string;
  slug: string;
};

export const glossary: GlossaryEntry[] = [
  {
    id: "agent",
    term: "agent",
    definition:
      "A model running inside a tool that can read a project, edit files, and run commands, then look at the result and continue. A chat reply only writes text. An agent can change the project.",
    part: "0",
    slug: "who-this-is-for",
  },
  {
    id: "full-stack",
    term: "full-stack",
    definition:
      "An app with a part that runs in the browser, a part that runs on a server, and stored data the server reads and writes.",
    part: "0",
    slug: "who-this-is-for",
  },
  {
    id: "repository",
    term: "repository",
    definition:
      "A project folder tracked by Git, so you can see each change and undo it. On GitHub, the repository is that project stored online.",
    part: "0",
    slug: "what-you-need",
  },
  {
    id: "generative-ai",
    term: "generative AI",
    definition:
      "A system that produces a new artifact, such as text, an image, audio, or code, from a prompt. It is not the same as a search box that returns a stored page.",
    part: "1",
    slug: "what-generative-ai-means",
  },
  {
    id: "llm",
    term: "LLM",
    definition:
      "A large language model. A model trained to predict the next token in text, used to generate replies, code, and other writing.",
    part: "1",
    slug: "what-generative-ai-means",
  },
  {
    id: "token",
    term: "token",
    definition:
      "A chunk of text the model reads and writes, often a piece of a word rather than a single letter. Prediction happens one token at a time.",
    part: "1",
    slug: "llms-and-tokens",
  },
  {
    id: "training",
    term: "training",
    definition:
      "The run that updates a model's weights from a large set of examples. Ordinary chat does not train the model.",
    part: "1",
    slug: "training-vs-using",
  },
  {
    id: "inference",
    term: "inference",
    definition:
      "Using a trained model to produce an output. The weights stay fixed while the model predicts the next token.",
    part: "1",
    slug: "training-vs-using",
  },
  {
    id: "fine-tuning",
    term: "fine-tuning",
    definition:
      "A smaller training run that updates a model's weights on a narrower set of examples, after the main training is done.",
    part: "1",
    slug: "training-vs-using",
  },
  {
    id: "hallucination",
    term: "hallucination",
    definition:
      "A fluent, specific claim the model produced that is not supported by the prompt or by a tool result you can check.",
    part: "1",
    slug: "hallucination",
  },
  {
    id: "context-window",
    term: "context window",
    definition:
      "The tokens the model can see in one request: instructions, earlier turns, and the new message. Text outside that limit is not visible unless the app puts it back in.",
    part: "1",
    slug: "context-window",
  },
  {
    id: "rag",
    term: "RAG",
    definition:
      "Retrieval-augmented generation. The app searches stored notes or documents and pastes the matching passages into the request, so the model can use them.",
    part: "1",
    slug: "it-doesnt-remember-you",
  },
  {
    id: "multimodal",
    term: "multimodal",
    definition:
      "A model that accepts more than one kind of input in the same request, such as text and an image.",
    part: "1",
    slug: "text-image-audio-code",
  },
  {
    id: "open-weights",
    term: "open weights",
    definition:
      "Model files you can download and run yourself. A hosted API is the other door: you send a request, and the vendor runs the model.",
    part: "1",
    slug: "model-families-sept-2026",
  },
  {
    id: "rate-limit",
    term: "rate limit",
    definition:
      "A cap the vendor enforces on how much you can call a model in a period, often measured in requests or tokens per minute. Your dashboard shows the cap for your account.",
    part: "1",
    slug: "tokens-cost-money",
  },
  {
    id: "api-key",
    term: "API key",
    definition:
      "A secret string your program sends so the vendor knows which account to bill. It belongs in an environment variable, not in a chat and not in a public repository.",
    part: "1",
    slug: "chat-app-vs-api",
  },
  {
    id: "tool-call",
    term: "tool call",
    definition:
      "A request the model emits for the app to run a function, such as code or a web search. The app runs it and pastes the result back into the context window.",
    part: "1",
    slug: "tools-and-agents",
  },
  {
    id: "prompt",
    term: "prompt",
    definition:
      "The text you send to a model for one request: the task, the context, and the shape you want back. A chat box and an API input field are both prompts.",
    part: "2",
    slug: "anatomy-of-a-good-prompt",
  },
  {
    id: "few-shot",
    term: "few-shot",
    definition:
      "A prompt that includes a few finished examples of the task, so the model can match their shape instead of guessing the format.",
    part: "2",
    slug: "few-shot-examples",
  },
  {
    id: "system-prompt",
    term: "system prompt",
    definition:
      "Instructions the app prepends to every request, ahead of the message you just typed. Custom instructions are a system prompt you can edit.",
    part: "2",
    slug: "system-prompts",
  },
  {
    id: "prompt-injection",
    term: "prompt injection",
    definition:
      "Untrusted text, such as a web page or a file, that contains instructions aimed at the model. The model may follow them unless the app treats that text as data.",
    part: "2",
    slug: "prompt-injection",
  },
  {
    id: "diff",
    term: "diff",
    definition:
      "A line-by-line listing of what changed. Added lines and removed lines are marked so you can accept or reject an edit.",
    part: "3",
    slug: "reading-a-diff",
  },
  {
    id: "git",
    term: "git",
    definition:
      "The tool that records snapshots of a project. A commit is one snapshot. git diff shows what changed since the last commit.",
    part: "3",
    slug: "git-clean-folder",
  },
  {
    id: "extension",
    term: "extension",
    definition:
      "Software you install into an editor, such as VS Code, to add a command, a language, or an AI chat.",
    part: "3",
    slug: "vs-code-and-extensions",
  },
  {
    id: "hook",
    term: "hook",
    definition:
      "A script you configure to run at a named point in an agent loop. It can observe the loop or stop a step. Cursor configures hooks in hooks.json. Claude Code documents hooks as user-defined shell commands.",
    part: "3",
    slug: "cursor-tour",
  },
  {
    id: "subagent",
    term: "subagent",
    definition:
      "A separate agent run with its own context window, system prompt, and tool list. Claude Code documents custom subagents this way.",
    part: "3",
    slug: "claude-code-tour",
  },
  {
    id: "vibe-coding",
    term: "vibe coding",
    definition:
      "A way of building by describing what you want, running it, and reacting to what you see, often without reading the code. Andrej Karpathy used the phrase on X on 2 February 2025. It fits prototypes. A shipped app still needs a diff and a check you can rerun.",
    part: "4",
    slug: "what-vibe-coding-is",
  },
  {
    id: "skill",
    term: "skill",
    definition:
      "A folder of instructions an agent can load for one kind of job. The entry file is SKILL.md. Cursor and Claude Code both document that name.",
    part: "5",
    slug: "skills-skill-md",
  },
  {
    id: "spec",
    term: "spec",
    definition:
      "A written description of what the program must do, concrete enough that a second person could test it. This course keeps that description in docs/SPEC.md. Agents do not read it unless an instruction tells them to.",
    part: "5",
    slug: "the-spec",
  },
  {
    id: "frontend",
    term: "frontend",
    definition:
      "The part of an app that runs in the browser: the HTML, CSS, and JavaScript the visitor's machine executes.",
    part: "6",
    slug: "frontend-html-css-javascript",
  },
  {
    id: "backend",
    term: "backend",
    definition:
      "The part of an app that runs on a server you control: it receives requests, checks them, and reads or writes stored data.",
    part: "6",
    slug: "what-servers-do",
  },
  {
    id: "html",
    term: "HTML",
    definition:
      "HyperText Markup Language. The tags that describe a page's structure, such as headings, paragraphs, and forms. The browser turns them into a document.",
    part: "6",
    slug: "frontend-html-css-javascript",
  },
  {
    id: "css",
    term: "CSS",
    definition:
      "Cascading Style Sheets. Rules that set how HTML looks: type, color, spacing, and layout. CSS does not decide what the server stores.",
    part: "6",
    slug: "frontend-html-css-javascript",
  },
  {
    id: "javascript",
    term: "JavaScript",
    definition:
      "The programming language browsers run on a page. It can change the document and send HTTP requests. It is not the same as Java.",
    part: "6",
    slug: "frontend-html-css-javascript",
  },
  {
    id: "hosting",
    term: "hosting",
    definition:
      "A computer that stays on and answers a public URL with your server program. Your laptop is the host only while it is awake and reachable.",
    part: "6",
    slug: "hosting",
  },
  {
    id: "sql",
    term: "SQL",
    definition:
      "Structured Query Language. The language you use to read and change rows in a relational database such as Postgres.",
    part: "7",
    slug: "sql-in-15-minutes",
  },
  {
    id: "primary-key",
    term: "primary key",
    definition:
      "The column, or columns, that identify one row in a table. Two rows in that table do not share a primary key.",
    part: "7",
    slug: "tables-rows-keys",
  },
  {
    id: "migration",
    term: "migration",
    definition:
      "A saved change to a database schema, applied in order, so every copy of the database gains the same tables and columns.",
    part: "7",
    slug: "orms-and-migrations",
  },
  {
    id: "orm",
    term: "ORM",
    definition:
      "Object-relational mapper. A library that lets you describe tables as code and generate SQL, instead of writing every query by hand.",
    part: "7",
    slug: "orms-and-migrations",
  },
  {
    id: "authentication",
    term: "authentication",
    definition:
      "Checking who is calling. A session, a signed token, or a login at another provider answers that question. It does not, by itself, decide which rows they may see.",
    part: "8",
    slug: "authentication",
  },
  {
    id: "authorization",
    term: "authorization",
    definition:
      "Checking whether this caller may do this action on this row. A logged-in user can still be forbidden from another customer's order.",
    part: "8",
    slug: "authorization",
  },
  {
    id: "webhook",
    term: "webhook",
    definition:
      "An HTTP request a service sends to your server when something happens, such as a payment succeeding. You verify the signature before you trust the body.",
    part: "8",
    slug: "webhooks-and-idempotency",
  },
  {
    id: "idempotency",
    term: "idempotency",
    definition:
      "Doing the same operation twice has the same result as doing it once. A repeated payment event must not fulfill the order a second time.",
    part: "8",
    slug: "webhooks-and-idempotency",
  },
  {
    id: "component",
    term: "component",
    definition:
      "A piece of user interface with a name, such as a book title or a tax button. A parent component renders child components. The framework updates the screen when the component's data changes.",
    part: "9",
    slug: "components",
  },
  {
    id: "props",
    term: "props",
    definition:
      "Values a parent component passes into a child. The child reads them. It does not own them, and it should not change them.",
    part: "9",
    slug: "props-and-state",
  },
  {
    id: "state",
    term: "state",
    definition:
      "Data a component owns that can change, such as the text in a field. When it changes, the framework redraws the parts that read it.",
    part: "9",
    slug: "props-and-state",
  },
  {
    id: "react-hook",
    term: "React hook",
    definition:
      "A function whose name starts with use, called from a React component, such as useState. It is not the agent hook from Part 3, which is a script in the tool loop.",
    part: "9",
    slug: "react-hooks",
  },
  {
    id: "nextjs",
    term: "Next.js",
    definition:
      "A React framework that maps files in the app directory to URLs. This course's site is a Next.js app. Pages and layouts are React components.",
    part: "9",
    slug: "nextjs-app-router",
  },
  {
    id: "app-router",
    term: "App Router",
    definition:
      "Next.js routing that uses the app directory. A page.tsx file is a route. A layout.tsx file wraps the pages under that folder.",
    part: "9",
    slug: "nextjs-app-router",
  },
  {
    id: "angular",
    term: "Angular",
    definition:
      "A framework whose components are classes with a template. Current Angular docs use signals for state: you read a signal by calling it.",
    part: "9",
    slug: "angular-in-brief",
  },
  {
    id: "linter",
    term: "linter",
    definition:
      "A program that reads source and fails when the code breaks a rule you configured, such as an unused import or a forbidden pattern. ESLint is the linter this repository runs with npm run lint.",
    part: "12",
    slug: "linters-formatters-types",
  },
  {
    id: "api",
    term: "API",
    definition:
      "A contract for how one program asks another program to do something. On the web, that contract is usually a set of URLs called over HTTP.",
    part: "7",
    slug: "rest-methods-and-status-codes",
  },
  {
    id: "rest",
    term: "REST",
    definition:
      "A style of web API in which a URL names a resource and the HTTP method says what to do with it. Roy Fielding described the style in 2000. Tutorials use the name for HTTP APIs that keep the method, the URL, and the status code.",
    part: "7",
    slug: "rest-methods-and-status-codes",
  },
  {
    id: "http",
    term: "HTTP",
    definition:
      "The request-and-response protocol browsers and web APIs use. Current HTTP semantics, including methods and status codes, are defined in RFC 9110.",
    part: "7",
    slug: "rest-methods-and-status-codes",
  },
  {
    id: "http-method",
    term: "HTTP method",
    definition:
      "The verb on a request, such as GET, POST, PUT, PATCH, or DELETE. It tells the server what to do with the URL. The same URL can be read or removed, depending on the method.",
    part: "7",
    slug: "rest-methods-and-status-codes",
  },
  {
    id: "url",
    term: "URL",
    definition:
      "The address of a resource. A path such as /books/42 names one item. A query string such as ?author=ada narrows a collection. The URL does not, by itself, say whether you are reading or deleting.",
    part: "7",
    slug: "rest-methods-and-status-codes",
  },
  {
    id: "status-code",
    term: "status code",
    definition:
      "The three-digit number on an HTTP response status line, before the body. 2xx means the request worked, 4xx means the request was the problem, and 5xx means the server failed.",
    part: "7",
    slug: "rest-methods-and-status-codes",
  },
  {
    id: "endpoint",
    term: "endpoint",
    definition:
      "One URL together with the HTTP methods that URL accepts. GET /books/42 is an endpoint. /books/42 alone is only a path.",
    part: "7",
    slug: "rest-methods-and-status-codes",
  },
  {
    id: "json",
    term: "JSON",
    definition:
      "JavaScript Object Notation. A text format for structured data, built from objects, arrays, strings, and numbers. Web APIs often use it as the request or response body.",
    part: "7",
    slug: "rest-methods-and-status-codes",
  },
];

export function getGlossaryEntry(term: string): GlossaryEntry | undefined {
  return glossary.find((entry) => entry.term === term);
}
