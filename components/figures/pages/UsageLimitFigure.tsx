import { Compare } from "../primitives";

export function UsageLimitFigure() {
  return (
    <Compare
      title="A plan cap and a token bill are different meters"
      caption="Read the meter the product actually uses. This course does not copy plan prices."
      columns={[
        {
          heading: "Chat plan",
          cells: ["A monthly cap", "The app sends requests", "The picker still matters"],
        },
        {
          heading: "API bill",
          cells: ["Tokens in and out", "You hold the key", "Rate limits still apply"],
        },
      ]}
    />
  );
}
