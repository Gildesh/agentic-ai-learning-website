import { Flow } from "../primitives";

export function SpecFirstFigure() {
  return (
    <Flow
      title="The spec is a file, not a mood"
      caption="docs/SPEC.md is read when a rule or a message names it. It is not loaded by magic."
      steps={[
        { label: "Write the behavior", detail: "Requests, statuses, rows." },
        { label: "Name the file", detail: "In the rule or the task." },
        { label: "Then build", detail: "The diff is judged against it." },
      ]}
    />
  );
}
