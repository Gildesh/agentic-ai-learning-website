import { Flow } from "../primitives";

export function Part8RecapFigure() {
  return (
    <Flow
      title="Secret, caller, row, then money"
      caption="A key stays out of git. A user is authenticated and then authorized. A card stays at the gateway."
      steps={[
        { label: "Secret", detail: ".env, not the repo." },
        { label: "Caller and row", detail: "Who, then which order." },
        { label: "Payment", detail: "Signature, once, in the right mode." },
      ]}
    />
  );
}
