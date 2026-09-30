import { Compare } from "../primitives";

export function OnePromptFigure() {
  return (
    <Compare
      title="One prompt ends. A product has a next step."
      caption="The first answer can be a draft. The loop is how you know the draft matches the spec."
      columns={[
        {
          heading: "One prompt",
          cells: ["A single answer", "No saved check", "You hope it is done"],
        },
        {
          heading: "A loop",
          cells: ["A spec and a task", "A check you can rerun", "A commit when it passes"],
        },
      ]}
    />
  );
}
