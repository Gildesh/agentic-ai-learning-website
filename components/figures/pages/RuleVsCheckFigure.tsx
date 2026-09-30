import { Compare } from "../primitives";

export function RuleVsCheckFigure() {
  return (
    <Compare
      title="A sentence asks. A command refuses."
      caption="The rule in a markdown file can be skipped. The command that exits non-zero cannot."
      columns={[
        {
          heading: "Request",
          cells: ["Please do not commit secrets", "The model may agree", "Nothing runs"],
        },
        {
          heading: "Enforcement",
          cells: ["A command in the loop", "Exit 1 blocks the step", "The same result every time"],
        },
      ]}
    />
  );
}
