import { Tree } from "../primitives";

export function SecurityListFigure() {
  return (
    <Tree
      title="Before a stranger can pay"
      caption="Each line is a yes or no. A maybe is a no until you point at the check."
      rows={[
        { depth: 0, label: "Secrets stay out of git" },
        { depth: 0, label: "Owner check on the row" },
        { depth: 0, label: "Webhook signature, once" },
        { depth: 0, label: "No card number in our logs" },
      ]}
    />
  );
}
