import { Tree } from "../primitives";

export function LockedFileFigure() {
  return (
    <Tree
      title="Some files are not on the card"
      caption="The checker and the locked test stay out of the implementation diff."
      rows={[
        { depth: 0, label: "May edit" },
        { depth: 1, label: "The route on the card" },
        { depth: 0, label: "May not edit" },
        { depth: 1, label: "The locked test" },
        { depth: 1, label: "scripts/check-course.mjs" },
      ]}
    />
  );
}
