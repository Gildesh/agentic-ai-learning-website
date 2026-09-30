import { Flow } from "../primitives";

export function MixFailuresFigure() {
  return (
    <Flow
      title="Mixing fails in ordinary ways"
      caption="A second model does not repair a missing spec or a shared wrong assumption."
      steps={[
        { label: "No spec path", detail: "The builder invents the API." },
        { label: "Summary as proof", detail: "The reviewer echoes the builder." },
        { label: "Window too small", detail: "The card's files do not fit." },
      ]}
    />
  );
}
