import { Flow } from "../primitives";

export function LaunchListFigure() {
  return (
    <Flow
      title="Green gate, then the live key"
      caption="Test mode first. The live webhook secret is a different value. The success URL is not proof."
      steps={[
        { label: "Gate", detail: "Lint, tests, course check." },
        { label: "Test payment", detail: "The documented test card." },
        { label: "Live", detail: "Live keys and one real charge." },
      ]}
    />
  );
}
