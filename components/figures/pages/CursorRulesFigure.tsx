import { Tree } from "../primitives";

export function CursorRulesFigure() {
  return (
    <Tree
      title="Cursor rules live in the project"
      caption="Project rules are .mdc files under .cursor/rules. AGENTS.md is the plain-markdown alternative the rules doc names."
      rows={[
        { depth: 0, label: "your-project/" },
        { depth: 1, label: ".cursor/rules/" },
        { depth: 2, label: "tax.mdc" },
        { depth: 1, label: "AGENTS.md" },
        { depth: 1, label: "hooks.json" },
      ]}
    />
  );
}
