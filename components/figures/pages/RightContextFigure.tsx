import { Compare } from "../primitives";

export function RightContextFigure() {
  return (
    <Compare
      title="The error, not the whole disk"
      caption="Context is the text that makes this task decidable. Extra files crowd the window."
      columns={[
        {
          heading: "Too wide",
          cells: ["Whole repository", "Old chat pasted in", "The error is buried"],
        },
        {
          heading: "Enough",
          cells: ["The error text", "The one function", "The command you ran"],
        },
      ]}
    />
  );
}
