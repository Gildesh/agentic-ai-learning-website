import { Sequence } from "../primitives";

export function PrototypeGapFigure() {
  return (
    <Sequence
      title="The button said Paid. The server did not check."
      caption="A prototype can paint a success state without a status code or a payment confirmation."
      actors={["Browser", "Server", "Pay"]}
      messages={[
        { n: 1, from: "Browser", to: "Server", label: "POST /checkout" },
        { n: 2, from: "Server", to: "Browser", label: "HTML that says Paid" },
        { n: 3, from: "Server", to: "Pay", label: "No request was sent" },
      ]}
    />
  );
}
