import { Tree } from "../primitives";

export function RulesFilesFigure() {
  return (
    <Tree
      title="Three instruction files you can commit"
      caption="Cursor documents .cursor/rules and AGENTS.md. Claude Code reads CLAUDE.md at session start."
      rows={[
        { depth: 0, label: "your-project/" },
        { depth: 1, label: "CLAUDE.md" },
        { depth: 1, label: "AGENTS.md" },
        { depth: 1, label: ".cursor/rules/" },
        { depth: 2, label: "tax.mdc" },
      ]}
    />
  );
}
