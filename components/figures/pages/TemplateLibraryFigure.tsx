import { Tree } from "../primitives";

export function TemplateLibraryFigure() {
  return (
    <Tree
      title="A few prompts you reuse"
      caption="Each file is one job. Fill the blanks. Do not rewrite the shape every time."
      rows={[
        { depth: 0, label: "prompts/" },
        { depth: 1, label: "bug.md" },
        { depth: 1, label: "task.md" },
        { depth: 1, label: "review.md" },
      ]}
    />
  );
}
