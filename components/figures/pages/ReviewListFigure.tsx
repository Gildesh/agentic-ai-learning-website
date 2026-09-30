import { Tree } from "../primitives";

export function ReviewListFigure() {
  return (
    <Tree
      title="A checklist you can finish"
      caption="Each line is a yes or no against the diff. A paragraph of advice is not a line."
      rows={[
        { depth: 0, label: "Gate exit 0" },
        { depth: 0, label: "Diff files match the card" },
        { depth: 0, label: "No secret in the patch" },
        { depth: 0, label: "Spec still agrees" },
      ]}
    />
  );
}
