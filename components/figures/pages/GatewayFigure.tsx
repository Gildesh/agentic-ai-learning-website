import { Sequence } from "../primitives";

export function GatewayFigure() {
  return (
    <Sequence
      title="Your server asks. The gateway takes the card."
      caption="The browser never posts the card number to your API. The gateway tells you the result."
      actors={["Browser", "Your server", "Gateway"]}
      messages={[
        { n: 1, from: "Browser", to: "Your server", label: "Start checkout" },
        { n: 2, from: "Your server", to: "Gateway", label: "Create the session" },
        { n: 3, from: "Browser", to: "Gateway", label: "Card details" },
        { n: 4, from: "Gateway", to: "Your server", label: "Paid, or not" },
      ]}
    />
  );
}
