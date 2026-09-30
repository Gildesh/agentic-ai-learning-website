import { Timeline } from "../primitives";

export function CapstoneFigure() {
  return (
    <Timeline
      title="A paid order, one card at a time"
      caption="Spec, locked test, route, checkout, webhook. Commit only when that card's gate is green."
      events={[
        { label: "Spec", detail: "Statuses and who may pay." },
        { label: "Build", detail: "One allow-list per card." },
        { label: "Ship", detail: "Test mode, then live." },
      ]}
    />
  );
}
