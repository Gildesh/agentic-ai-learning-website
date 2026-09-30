import { Compare } from "../primitives";

export function LockedTestFigure() {
  return (
    <Compare
      title="The check exists before the implementation"
      caption="If the agent can edit the test to go green, the test was not locked."
      columns={[
        {
          heading: "Locked",
          cells: ["Test is already committed", "Agent may not edit it", "Green means the spec"],
        },
        {
          heading: "Unlocked",
          cells: ["Test arrives with the fix", "Both can move", "Green can be a weaker test"],
        },
      ]}
    />
  );
}
