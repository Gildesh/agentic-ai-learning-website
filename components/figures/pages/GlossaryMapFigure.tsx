import { Flow } from "../primitives";

export function GlossaryMapFigure() {
  return (
    <Flow
      title="A term points at the page that defined it"
      caption="The glossary is the index. The lesson is the definition. Search finds both."
      steps={[
        { label: "Term", detail: "The word on the page." },
        { label: "Entry", detail: "A short definition." },
        { label: "Back", detail: "The lesson that introduced it." },
      ]}
    />
  );
}
