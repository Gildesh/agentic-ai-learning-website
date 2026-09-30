import { Sequence } from "../primitives";

export function ButtonClickFigure() {
  return (
    <Sequence
      title="One click, four hops"
      caption="The button is frontend. The decision is backend. The screen updates from the response."
      actors={["Page", "Server", "Store"]}
      messages={[
        { n: 1, from: "Page", to: "Server", label: "POST /tax" },
        { n: 2, from: "Server", to: "Store", label: "Read the rate" },
        { n: 3, from: "Store", to: "Server", label: "0.08" },
        { n: 4, from: "Server", to: "Page", label: "200 and 80" },
      ]}
    />
  );
}
