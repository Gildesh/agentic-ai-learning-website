import { Flow } from "../primitives";

export function ReadGeneratedCodeFigure() {
  return (
    <Flow
      title="Read the path the click takes"
      caption="You do not need every line. You need the file, the function, and the check."
      steps={[
        { label: "Find the file the screen calls", detail: "A route, a button handler, a script." },
        { label: "Read the function's inputs", detail: "What can be missing or hostile." },
        { label: "Run one input yourself", detail: "The output either matches or it does not." },
      ]}
    />
  );
}
