import { Flow } from "../primitives";

export function Part1RecapFigure() {
  return (
    <Flow
      title="What to carry into prompting"
      caption="Part 2 is how you write the request. These three checks still apply."
      steps={[
        { label: "It predicts the next token", detail: "Fluent is not the same as counted." },
        { label: "The window is this request", detail: "Memory is text the app pasted in." },
        { label: "A claim needs a source", detail: "A file, a doc, or a tool result." },
      ]}
    />
  );
}
