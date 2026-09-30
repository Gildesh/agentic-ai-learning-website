import { Compare } from "../primitives";

export function TestLiveFigure() {
  return (
    <Compare
      title="Test keys move no money. Live keys do."
      caption="Stripe's testing docs say to use test keys and test cards, and not real card details."
      columns={[
        {
          heading: "Test",
          cells: ["Test API keys", "Test card numbers", "A separate webhook secret"],
        },
        {
          heading: "Live",
          cells: ["Live API keys", "Real charges", "Its own webhook secret"],
        },
      ]}
    />
  );
}
