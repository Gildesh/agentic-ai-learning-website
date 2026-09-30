import { Compare } from "../primitives";

export function RulesContentsFigure() {
  return (
    <Compare
      title="Standing rules, not today's error"
      caption="A rules file is sent often. A traceback and a secret do not belong in it."
      columns={[
        {
          heading: "Put in",
          cells: ["Files that are off limits", "How to show a result", "The test command"],
        },
        {
          heading: "Leave out",
          cells: ["API keys", "Today's traceback", "A one-off task"],
        },
      ]}
    />
  );
}
