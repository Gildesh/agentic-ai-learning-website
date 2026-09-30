import { Flow } from "../primitives";

export function GitSheetFigure() {
  return (
    <Flow
      title="Look, then snapshot"
      caption="Status and diff come before add. Commit comes after the gate. Push is not the gate."
      steps={[
        { label: "status, diff", detail: "What changed." },
        { label: "add, commit", detail: "The files you mean." },
        { label: "branch", detail: "One card, one line of work." },
      ]}
    />
  );
}
