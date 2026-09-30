import { Annotated } from "../primitives";

export function TaskCardFigure() {
  return (
    <Annotated
      title="One card, one job"
      caption="Job, files, and the check. A second job is a second card."
      kind="editor"
      lines={["Job: tax_cents only", "Files: tax.py", "Done: prints 80"]}
      notes={[
        { n: 1, text: "The file list is the boundary." },
        { n: 2, text: "Done is a command output, not a feeling." },
      ]}
    />
  );
}
