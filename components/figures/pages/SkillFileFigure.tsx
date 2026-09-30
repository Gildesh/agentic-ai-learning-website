import { Tree } from "../primitives";

export function SkillFileFigure() {
  return (
    <Tree
      title="One skill, one folder, one SKILL.md"
      caption="Cursor requires the name field to match the folder. Claude Code also starts a skill at SKILL.md."
      rows={[
        { depth: 0, label: ".cursor/skills/" },
        { depth: 1, label: "review-diff/" },
        { depth: 2, label: "SKILL.md" },
      ]}
    />
  );
}
