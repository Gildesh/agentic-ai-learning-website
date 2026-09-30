import { Flow } from "../primitives";

export function FurtherReadingFigure() {
  return (
    <Flow
      title="The vendor page outranks this course"
      caption="If a price or a header on the official page disagrees, write the page's date and follow the page."
      steps={[
        { label: "Open the doc", detail: "The URL in the lesson." },
        { label: "Note the date", detail: "What you checked." },
        { label: "Prefer the doc", detail: "Over a remembered number." },
      ]}
    />
  );
}
