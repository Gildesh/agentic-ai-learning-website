import { Annotated } from "../primitives";

export function CodePromptFigure() {
  return (
    <Annotated
      title="A code prompt names the file and the check"
      caption="The model writes text. The command is how you know the text works."
      kind="editor"
      lines={["file: tax.py", "change: only tax_cents", "keep: the other functions", "done: python tax.py"]}
      notes={[
        { n: 1, text: "One file, so the edit has a boundary." },
        { n: 2, text: "The command is the definition of done." },
      ]}
    />
  );
}
