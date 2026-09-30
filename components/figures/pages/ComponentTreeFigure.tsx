import { Tree } from "../primitives";

export function ComponentTreeFigure() {
  return (
    <Tree
      title="A page is a tree of components"
      caption="The parent decides which children exist. Each child receives only the values it needs."
      rows={[
        { depth: 0, label: "BookPage" },
        { depth: 1, label: "BookTitle" },
        { depth: 1, label: "TaxButton" },
        { depth: 2, label: "Cents" },
      ]}
    />
  );
}
