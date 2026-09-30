import { Flow } from "../primitives";

export function CodingToolLoopFigure() {
  return (
    <Flow
      title="Read, edit, run, then look"
      caption="An AI coding tool is an agent loop over your project. The chat bubble is the transcript of that loop."
      steps={[
        { label: "Read files", detail: "The tool result is the file text." },
        { label: "Edit files", detail: "The artifact is a diff." },
        { label: "Run a command", detail: "The artifact is the output." },
      ]}
    />
  );
}
