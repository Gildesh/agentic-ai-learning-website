import { Flow } from "../primitives";

export function Part11RecapFigure() {
  return (
    <Flow
      title="Roles, prices, then your gate"
      caption="Claude and Grok are families. The model id is what you call. The exit code is what you trust."
      steps={[
        { label: "Name the id", detail: "Not the family alone." },
        { label: "Split the jobs", detail: "Spec, build, review." },
        { label: "Run the gate", detail: "Then commit." },
      ]}
    />
  );
}
