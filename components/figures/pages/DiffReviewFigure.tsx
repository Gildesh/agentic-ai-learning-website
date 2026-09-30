import { Annotated } from "../primitives";

export function DiffReviewFigure() {
  return (
    <Annotated
      title="Read the minus and the plus"
      caption="A diff is the edit. Accept it only after the removed line and the added line both make sense."
      kind="editor"
      lines={["- return price_cents * rate", "+ return int(price_cents) * rate", "  file: tax.py"]}
      notes={[
        { n: 1, text: "The minus line is what the file had." },
        { n: 2, text: "The plus line is the proposed edit." },
      ]}
    />
  );
}
