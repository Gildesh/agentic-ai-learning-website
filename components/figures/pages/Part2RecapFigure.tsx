import { Flow } from "../primitives";

export function Part2RecapFigure() {
  return (
    <Flow
      title="A prompt you can check"
      caption="Shape, examples, the right context, and a second pass that names the miss."
      steps={[
        { label: "Name the artifact", detail: "List, JSON, function, or diff." },
        { label: "Show the shape", detail: "An example, or the keys." },
        { label: "Revise the miss", detail: "Quote what was wrong." },
      ]}
    />
  );
}
