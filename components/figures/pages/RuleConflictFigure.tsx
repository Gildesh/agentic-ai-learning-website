import { Compare } from "../primitives";

export function RuleConflictFigure() {
  return (
    <Compare
      title="Two files, one disagreement"
      caption="The agent will satisfy one sentence. Delete or rewrite the other."
      columns={[
        {
          heading: "CLAUDE.md",
          cells: ["Edit tax.py only", "Show command output"],
        },
        {
          heading: "AGENTS.md",
          cells: ["Feel free to add files", "Be brief"],
        },
      ]}
    />
  );
}
