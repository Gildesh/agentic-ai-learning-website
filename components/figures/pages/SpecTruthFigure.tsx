import { Flow } from "../primitives";

export function SpecTruthFigure() {
  return (
    <Flow
      title="The spec is the test, not the chat"
      caption="docs/SPEC.md is this course's file. Point the agent at it. A vendor does not load it for you."
      steps={[
        { label: "Write the check in the spec", detail: "Input and expected result." },
        { label: "Tell the agent to read it", detail: "A rule or a message names the path." },
        { label: "Change code or change the spec", detail: "Do not leave them in disagreement." },
      ]}
    />
  );
}
