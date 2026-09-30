import { Flow } from "../primitives";

export function WebhookOnceFigure() {
  return (
    <Flow
      title="Verify, then apply once"
      caption="A bad signature is a 400. A repeated event id is a 200 you have already handled."
      steps={[
        { label: "Signature", detail: "Raw body and the header." },
        { label: "Event id", detail: "Have we stored this one?" },
        { label: "Fulfill", detail: "Mark the order paid a single time." },
      ]}
    />
  );
}
