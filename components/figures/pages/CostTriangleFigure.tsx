import { Flow } from "../primitives";

export function CostTriangleFigure() {
  return (
    <Flow
      title="Three numbers you can actually check"
      caption="Price is on the vendor page. Speed is what you time. Quality is your gate, not a slogan."
      steps={[
        { label: "Price", detail: "Dollars per million tokens." },
        { label: "Speed", detail: "Clock time on your card." },
        { label: "Quality", detail: "Exit code of your check." },
      ]}
    />
  );
}
