import { Flow } from "../primitives";

export function RuleToCheckFigure() {
  return (
    <Flow
      title="From a sentence to an exit code"
      caption="Name the files, write the command, run it on a bad sample, then put it in the loop."
      steps={[
        { label: "Sentence", detail: "Do not commit .env." },
        { label: "Command", detail: "Fail if git tracks it." },
        { label: "Loop", detail: "Pre-commit and CI both run it." },
      ]}
    />
  );
}
