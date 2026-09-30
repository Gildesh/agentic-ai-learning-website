import { Compare } from "../primitives";

export function VibeFitsFigure() {
  return (
    <Compare
      title="A prototype can skip checks a product cannot"
      caption="Vibe coding is a fit when the cost of a wrong file is a deleted folder."
      columns={[
        {
          heading: "Fit",
          cells: ["Demo tomorrow", "Throwaway folder", "You will click it yourself"],
        },
        {
          heading: "Poor fit",
          cells: ["Real payments", "Other people's data", "You cannot read the diff"],
        },
      ]}
    />
  );
}
