import { Compare } from "../primitives";

export function MakerCheckerFigure() {
  return (
    <Compare
      title="The maker wants the task done. The checker wants the spec."
      caption="Give the checker the diff and the spec. The maker's transcript is not evidence."
      columns={[
        {
          heading: "Maker",
          cells: ["Edits the files", "Sees the errors", "Tries to go green"],
        },
        {
          heading: "Checker",
          cells: ["Does not edit", "Reads diff and spec", "Says pass or the gap"],
        },
      ]}
    />
  );
}
