import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const pagesDir = path.join(root, "content", "pages");
const figuresDir = path.join(root, "components", "figures", "pages");
const problems = [];

const expectedCounts = {
  0: 4,
  1: 12,
  2: 12,
  3: 12,
  4: 11,
  5: 11,
  6: 12,
  7: 12,
  8: 12,
  9: 12,
  10: 12,
  11: 10,
  12: 10,
  A: 8,
};

const mustMention = {
  0: ["laptop"],
  1: ["LLM", "token", "context window", "hallucination"],
  2: ["prompt", "few-shot", "JSON", "prompt injection"],
  3: ["Cursor", "VS Code", "Antigravity", "Claude Code", "diff", "git"],
  4: ["vibe coding", "git"],
  5: ["CLAUDE.md", "AGENTS.md", "SKILL.md"],
  6: ["frontend", "backend", "HTML", "CSS", "JavaScript"],
  7: ["API", "REST", "JSON", "endpoint", "SQL", "migration"],
  8: [".env", "authentication", "authorization", "OWASP", "webhook", "idempotency", "Stripe"],
  9: ["component", "props", "state", "Next.js", "App Router", "Angular"],
  10: ["spec", "hook", "commit"],
  11: ["Claude", "Grok"],
  12: ["linter", "GitHub Actions", "pre-commit"],
  A: ["glossary"],
};

const primitiveFigures = ["Flow", "Sequence", "Stack", "Compare", "Annotated", "Tree", "Timeline", "Matrix"];

const banned = [
  { name: "Sam", re: /\bSam\b/i },
  { name: "beat", re: /\bbeat\b/i },
  { name: "desk", re: /\bdesk\b/i },
  { name: "spine", re: /\bspine\b/i },
  { name: "wrapper", re: /\bwrapper\b/i },
  { name: "finish line", re: /\bfinish line\b/i },
];

function mentioned(text, term) {
  if (term.startsWith(".") || term.includes(" ")) {
    return text.toLowerCase().includes(term.toLowerCase());
  }
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`\\b${escaped}\\b`, "i").test(text);
}

function proseWords(body) {
  const text = body
    .replace(/<Code\b[\s\S]*?\/>/g, " ")
    .replace(/<Code\b[^>]*>[\s\S]*?<\/Code>/g, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[A-Z][A-Za-z0-9]*\s*\/>/g, " ")
    .replace(/\[[^\]]+\]\([^)]+\)/g, (link) => link.slice(1, link.indexOf("]")))
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`]/g, " ");
  return text.split(/\s+/).filter(Boolean);
}

function tagCount(body, name) {
  const re = new RegExp(`<${name}(\\s|>|/)`, "g");
  return body.match(re)?.length ?? 0;
}

const figureNames = [];
if (fs.existsSync(figuresDir)) {
  for (const file of fs.readdirSync(figuresDir).filter((file) => file.endsWith(".tsx"))) {
    const source = fs.readFileSync(path.join(figuresDir, file), "utf8");
    for (const match of source.matchAll(/export function ([A-Z][A-Za-z0-9]*)/g)) {
      figureNames.push(match[1]);
    }
  }
}

const glossarySource = fs.readFileSync(path.join(root, "lib", "glossary.ts"), "utf8");
const glossaryTerms = [...glossarySource.matchAll(/term:\s*"([^"]+)"/g)].map((match) => match[1]);

const files = fs.existsSync(pagesDir)
  ? fs.readdirSync(pagesDir).filter((file) => file.endsWith(".mdx")).sort()
  : [];

const pages = [];
const figureUse = new Map();

for (const file of files) {
  const raw = fs.readFileSync(path.join(pagesDir, file), "utf8");
  const { data, content } = matter(raw);
  const pageProblems = [];
  const part = data.part === "A" || data.part === "a" ? "A" : String(data.part);
  const required = ["slug", "title", "summary", "lastChecked"];
  for (const key of required) {
    if (typeof data[key] !== "string" || data[key].trim() === "") pageProblems.push(`${key} missing`);
  }
  if (!Number.isInteger(Number(data.number))) pageProblems.push("number missing");
  if (!Number.isFinite(Number(data.minutes))) pageProblems.push("minutes missing");
  if (typeof data.lastChecked === "string" && !/^\d{4}-\d{2}$/.test(data.lastChecked)) {
    pageProblems.push("lastChecked must look like 2026-09");
  }
  const terms = Array.isArray(data.terms) ? data.terms.map(String) : [];
  if (terms.length < 2) pageProblems.push(`expected at least 2 terms, found ${terms.length}`);
  for (const term of terms) {
    if (!glossaryTerms.includes(term)) pageProblems.push(`term "${term}" is not in lib/glossary.ts`);
  }

  if (tagCount(content, "Hook") !== 1) pageProblems.push(`expected exactly one Hook, found ${tagCount(content, "Hook")}`);
  if (tagCount(content, "TryIt") !== 1) pageProblems.push(`expected exactly one TryIt, found ${tagCount(content, "TryIt")}`);
  if (tagCount(content, "Mistake") !== 1) pageProblems.push(`expected exactly one Mistake, found ${tagCount(content, "Mistake")}`);

  const usedFigures = [...figureNames, ...primitiveFigures].filter((name) => tagCount(content, name) > 0);
  const figureTags = usedFigures.reduce((sum, name) => sum + tagCount(content, name), 0);
  if (figureTags !== 1) pageProblems.push(`expected exactly one figure, found ${figureTags || 0}`);
  for (const name of usedFigures) {
    const owners = figureUse.get(name) ?? [];
    owners.push(file);
    figureUse.set(name, owners);
  }

  for (const rule of banned) {
    if (rule.re.test(raw)) pageProblems.push(`banned word "${rule.name}"`);
  }

  const words = proseWords(content);
  if (words.length < 250 || words.length > 700) {
    pageProblems.push(`prose words ${words.length} outside 250-700`);
  }

  console.log(`${file}\t${words.length} words\t${pageProblems.length ? pageProblems.join("; ") : "ok"}`);
  if (pageProblems.length) problems.push(`${file}: ${pageProblems.join("; ")}`);

  pages.push({ file, part, number: Number(data.number), terms, content, raw });
}

for (const [name, owners] of figureUse) {
  if (owners.length > 1) problems.push(`figure ${name} is used on more than one page: ${owners.join(", ")}`);
}

const usedTerms = new Set(pages.flatMap((page) => page.terms));
for (const term of glossaryTerms) {
  if (!usedTerms.has(term)) problems.push(`glossary term "${term}" is not used on any page`);
}
if (glossaryTerms.length === 0) problems.push("glossary is empty");

if (pages.length !== 150) problems.push(`expected 150 pages, found ${pages.length}`);

const byPart = new Map();
for (const page of pages) {
  const list = byPart.get(page.part) ?? [];
  list.push(page);
  byPart.set(page.part, list);
}

for (const [part, expected] of Object.entries(expectedCounts)) {
  const list = (byPart.get(part) ?? []).slice().sort((a, b) => a.number - b.number);
  if (list.length !== expected) {
    problems.push(`part ${part} has ${list.length} of ${expected} pages`);
    continue;
  }
  const numbers = list.map((page) => page.number);
  const contiguous = numbers.every((number, index) => number === index + 1);
  if (!contiguous) problems.push(`part ${part} numbers are not 1..${expected}`);
  const text = list.map((page) => page.raw).join("\n");
  const missing = (mustMention[part] ?? []).filter((term) => !mentioned(text, term));
  if (missing.length) problems.push(`part ${part} never mentions: ${missing.join(", ")}`);
}

const expectedTotal = Object.values(expectedCounts).reduce((sum, count) => sum + count, 0);
if (expectedTotal !== 150) problems.push(`expectedCounts sum to ${expectedTotal}, not 150`);

console.log(`PAGES ${pages.length}`);
console.log(`GLOSSARY ${glossaryTerms.length}`);
if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
