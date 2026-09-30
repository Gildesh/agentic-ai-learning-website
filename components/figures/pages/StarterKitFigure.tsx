import { Tree } from "../primitives";

export function StarterKitFigure() {
  return (
    <Tree
      title="A kit you can copy into a new repo"
      caption="One standing file, one skill, one spec. Fill the blanks. Do not keep two copies of a rule."
      rows={[
        { depth: 0, label: "your-project/" },
        { depth: 1, label: "AGENTS.md" },
        { depth: 1, label: "docs/SPEC.md" },
        { depth: 1, label: ".cursor/skills/review-diff/" },
        { depth: 2, label: "SKILL.md" },
      ]}
    />
  );
}
