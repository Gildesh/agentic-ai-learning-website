import { Compare } from "../primitives";

export function SqlVsDocumentFigure() {
  return (
    <Compare
      title="A row with a key, or a document with a copy"
      caption="The author name lives once in SQL. A document often stores a copy inside every book."
      columns={[
        {
          heading: "SQL",
          cells: ["authors row id 7", "books.author_id = 7", "Rename one row"],
        },
        {
          heading: "Document",
          cells: ["author inside the book", "No separate row", "Rename every copy"],
        },
      ]}
    />
  );
}
