import { Stack } from "../primitives";

export function HtmlCssJsFigure() {
  return (
    <Stack
      title="Structure, look, and behavior"
      caption="HTML is the document. CSS is how it looks. JavaScript is what runs when someone acts."
      layers={[
        { label: "JavaScript", detail: "Changes the page and sends requests." },
        { label: "CSS", detail: "Type, color, and layout." },
        { label: "HTML", detail: "The tags: titles, forms, buttons." },
      ]}
    />
  );
}
