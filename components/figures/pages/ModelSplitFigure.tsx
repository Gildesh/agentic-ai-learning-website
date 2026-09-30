import { Compare } from "../primitives";

export function ModelSplitFigure() {
  return (
    <Compare
      title="One split you can rerun"
      caption="As of September 2026, Opus and Haiku publish different prices. Grok 4.7 publishes another. Your gate picks the builder."
      columns={[
        {
          heading: "Spec and review",
          cells: ["claude-opus-5-5", "$4 in / $20 out", "1M context"],
        },
        {
          heading: "A build candidate",
          cells: ["Haiku or grok-4.7", "Lower or other price", "Must pass the gate"],
        },
      ]}
    />
  );
}
