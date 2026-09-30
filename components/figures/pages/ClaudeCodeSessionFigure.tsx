import { Flow } from "../primitives";

export function ClaudeCodeSessionFigure() {
  return (
    <Flow
      title="A Claude Code session starts with CLAUDE.md"
      caption="The overview says Claude Code reads that file at the start of every session, then can edit files and run commands."
      steps={[
        { label: "Read CLAUDE.md", detail: "Project instructions, in the repo root." },
        { label: "Work across files", detail: "Reads, edits, and commands." },
        { label: "Optional subagent", detail: "Its own window and tool list." },
      ]}
    />
  );
}
