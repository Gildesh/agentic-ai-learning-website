import { Compare } from "../primitives";

export function VibeToEngineeringFigure() {
  return (
    <Compare
      title="What you add when the folder must survive"
      caption="Vibe coding stays available. Engineering is the extra artifacts you refuse to skip."
      columns={[
        {
          heading: "Vibe pass",
          cells: ["Describe and react", "Commit first", "Throw it away freely"],
        },
        {
          heading: "Keep it",
          cells: ["A spec someone can test", "A diff you read", "A command that fails loudly"],
        },
      ]}
    />
  );
}
