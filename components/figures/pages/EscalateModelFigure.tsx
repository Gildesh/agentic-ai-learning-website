import { Flow } from "../primitives";

export function EscalateModelFigure() {
  return (
    <Flow
      title="Escalate the blocked card, not a blank chat"
      caption="The stronger role gets the spec, the diff, and the gate output."
      steps={[
        { label: "Blocked", detail: "Two retries already failed." },
        { label: "Packet", detail: "Spec, diff, exit code." },
        { label: "Strong role", detail: "A new card, or a spec edit." },
      ]}
    />
  );
}
