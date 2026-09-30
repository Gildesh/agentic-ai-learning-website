import { Tree } from "../primitives";

export function JsonTypesFigure() {
  return (
    <Tree
      title="The six JSON values"
      caption="A document is one value. Objects and arrays hold the others. A comment is not a value."
      rows={[
        { depth: 0, label: "object    {\"title\":\"Dune\"}" },
        { depth: 0, label: "array     [\"Dune\",\"Circe\"]" },
        { depth: 0, label: "string    \"Dune\"" },
        { depth: 0, label: "number    1965" },
        { depth: 0, label: "boolean   true or false" },
        { depth: 0, label: "null      null" },
      ]}
    />
  );
}
