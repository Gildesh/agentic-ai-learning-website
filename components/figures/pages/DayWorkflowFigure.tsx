import { Timeline } from "../primitives";

export function DayWorkflowFigure() {
  return (
    <Timeline
      title="One day, two roles"
      caption="The commit happens after the gate. The second model never replaces that command."
      events={[
        { label: "Spec", detail: "Strong role edits the file." },
        { label: "Cards", detail: "Fast role, one branch each." },
        { label: "Review", detail: "The other family reads the diff." },
      ]}
    />
  );
}
