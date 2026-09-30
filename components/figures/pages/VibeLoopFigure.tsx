import { Flow } from "../primitives";

export function VibeLoopFigure() {
  return (
    <Flow
      title="Describe, run, react"
      caption="Each pass is one visible result. The reaction names what you saw, not a new mood."
      steps={[
        { label: "Describe", detail: "One outcome and how you will look at it." },
        { label: "Run", detail: "The dev server, the script, or the page." },
        { label: "React", detail: "Quote what appeared, then ask for one change." },
      ]}
    />
  );
}
