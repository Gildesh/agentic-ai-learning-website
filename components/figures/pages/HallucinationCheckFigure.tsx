import { Flow } from "../primitives";

export function HallucinationCheckFigure() {
  return (
    <Flow
      title="A fluent sentence still needs a source"
      caption="Hallucination is a specific claim you cannot trace to the prompt or to a tool result."
      steps={[
        { label: "The model writes a specific claim", detail: "A name, a number, a method, a citation." },
        { label: "Look for the source in the request", detail: "The prompt, a pasted doc, or a tool result." },
        { label: "If it is not there, do not ship it", detail: "Ask for the quote, the file, or the command." },
      ]}
    />
  );
}
