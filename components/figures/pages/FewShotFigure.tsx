import { Flow } from "../primitives";

export function FewShotFigure() {
  return (
    <Flow
      title="Examples, then the unfinished case"
      caption="Few-shot means two or three finished pairs, then the input that still needs an output."
      steps={[
        { label: "Example 1", detail: "Input and the output you want copied in shape." },
        { label: "Example 2", detail: "Same shape, different content." },
        { label: "The real task", detail: "Input only. The model supplies the output." },
      ]}
    />
  );
}
