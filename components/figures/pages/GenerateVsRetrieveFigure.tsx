import { Compare } from "../primitives";

export function GenerateVsRetrieveFigure() {
  return (
    <Compare
      title="Retrieve a row, or produce a new artifact"
      caption="Search returns something already stored. Generative AI produces a new text, image, or file from the prompt."
      columns={[
        {
          heading: "Search",
          cells: ["Query in", "Index lookup", "Links out"],
        },
        {
          heading: "Generative",
          cells: ["Prompt in", "Next piece predicted", "New text out"],
        },
      ]}
    />
  );
}
