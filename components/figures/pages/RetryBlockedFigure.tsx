import { Flow } from "../primitives";

export function RetryBlockedFigure() {
  return (
    <Flow
      title="A bound, then a person"
      caption="Two failures are information. A sixth quiet retry is a loop with no exit."
      steps={[
        { label: "Retry", detail: "Same card, the error pasted." },
        { label: "Blocked", detail: "Write what failed." },
        { label: "Escalate", detail: "A person, or a stronger model." },
      ]}
    />
  );
}
