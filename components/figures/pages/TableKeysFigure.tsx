import { Tree } from "../primitives";

export function TableKeysFigure() {
  return (
    <Tree
      title="One book row points at one author row"
      caption="The primary key identifies the row. A foreign key stores another table's primary key."
      rows={[
        { depth: 0, label: "books" },
        { depth: 1, label: "id 42, the primary key" },
        { depth: 1, label: "title Dune" },
        { depth: 1, label: "author_id 7, a foreign key" },
        { depth: 0, label: "authors" },
        { depth: 1, label: "id 7, name Herbert" },
      ]}
    />
  );
}
