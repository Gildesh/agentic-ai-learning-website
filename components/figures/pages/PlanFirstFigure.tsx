import { Flow } from "../primitives";

export function PlanFirstFigure() {
  return (
    <Flow
      title="A visible plan, then the artifact"
      caption="The plan is text in the reply. You can reject a bad step before any file changes."
      steps={[
        { label: "List the steps", detail: "Files, commands, and what done means." },
        { label: "You read the list", detail: "Wrong file or extra scope stops here." },
        { label: "Then write the artifact", detail: "The function, the diff, or the JSON." },
      ]}
    />
  );
}
