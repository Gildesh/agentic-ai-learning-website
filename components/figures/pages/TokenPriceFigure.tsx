import { Compare } from "../primitives";

export function TokenPriceFigure() {
  return (
    <Compare
      title="Input tokens and output tokens are different lines"
      caption="Claude Sonnet 5.5, as of September 2026: $2 per million input tokens, $10 per million output tokens."
      columns={[
        {
          heading: "Input",
          cells: ["Text you send", "$2 / 1M tokens", "Instructions count too"],
        },
        {
          heading: "Output",
          cells: ["Text the model writes", "$10 / 1M tokens", "A long reply costs more"],
        },
      ]}
    />
  );
}
