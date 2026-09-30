import { Compare } from "../primitives";

export function ShortRulesFigure() {
  return (
    <Compare
      title="Short enough to still be true"
      caption="A long rule file crowds the window and hides the line that matters."
      columns={[
        {
          heading: "Short",
          cells: ["A few standing lines", "Each one testable", "Updated when code changes"],
        },
        {
          heading: "Bloated",
          cells: ["Old tasks left in", "Contradicts itself", "The agent skips lines"],
        },
      ]}
    />
  );
}
