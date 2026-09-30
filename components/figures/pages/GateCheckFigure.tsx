import { Flow } from "../primitives";

export function GateCheckFigure() {
  return (
    <Flow
      title="A gate is a command, not a feeling"
      caption="The same command, on the same tree, gives the same answer."
      steps={[
        { label: "Run", detail: "Tests, types, or the checker." },
        { label: "Read the exit", detail: "Zero passes. Anything else fails." },
        { label: "Stop or continue", detail: "Do not argue with the output." },
      ]}
    />
  );
}
