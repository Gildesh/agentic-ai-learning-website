import { Compare } from "../primitives";

export function CardBoundaryFigure() {
  return (
    <Compare
      title="What you store, and what you never see"
      caption="Stripe's security guide says low-risk integrations keep card details off your server."
      columns={[
        {
          heading: "You may keep",
          cells: ["Order id", "Last four digits", "Paid or unpaid"],
        },
        {
          heading: "You do not collect",
          cells: ["Full card number", "The security code", "A raw card in the log"],
        },
      ]}
    />
  );
}
