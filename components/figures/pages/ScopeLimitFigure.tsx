import { Compare } from "../primitives";

export function ScopeLimitFigure() {
  return (
    <Compare
      title="The card names the files"
      caption="A drive-by rewrite of an unrelated file is a failed task, even if the feature works."
      columns={[
        {
          heading: "In scope",
          cells: ["The files on the card", "A test you were told to add", "The check command"],
        },
        {
          heading: "Out of scope",
          cells: ["Unrelated deletes", "A new framework", "A surprise refactor"],
        },
      ]}
    />
  );
}
