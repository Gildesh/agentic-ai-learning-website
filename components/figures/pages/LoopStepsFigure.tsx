import { Flow } from "../primitives";

export function LoopStepsFigure() {
  return (
    <Flow
      title="Five steps, in this order"
      caption="Commit is last. A green check is the reason the snapshot exists."
      steps={[
        { label: "Spec", detail: "What done means." },
        { label: "Task, then build", detail: "One card, then the diff." },
        { label: "Check, then commit", detail: "Rerun the gate. Then snapshot." },
      ]}
    />
  );
}
