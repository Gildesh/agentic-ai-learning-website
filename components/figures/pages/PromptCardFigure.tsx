import { Tree } from "../primitives";

export function PromptCardFigure() {
  return (
    <Tree
      title="One card, four lines"
      caption="Job, files, check, and the spec path. Leave out a line and the model invents it."
      rows={[
        { depth: 0, label: "Job: one behavior" },
        { depth: 0, label: "Files: the allow-list" },
        { depth: 0, label: "Check: a command" },
        { depth: 0, label: "Spec: the path" },
      ]}
    />
  );
}
