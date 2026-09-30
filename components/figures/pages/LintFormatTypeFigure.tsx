import { Flow } from "../primitives";

export function LintFormatTypeFigure() {
  return (
    <Flow
      title="Three commands, three jobs"
      caption="A formatter rewrites. A linter reports rule breaks. A type checker reports impossible values."
      steps={[
        { label: "Format", detail: "Whitespace and layout." },
        { label: "Lint", detail: "Rules, including unused code." },
        { label: "Types", detail: "Values that cannot exist." },
      ]}
    />
  );
}
