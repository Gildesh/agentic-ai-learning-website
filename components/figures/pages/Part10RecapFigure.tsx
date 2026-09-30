import { Flow } from "../primitives";

export function Part10RecapFigure() {
  return (
    <Flow
      title="Spec, gate, then commit"
      caption="A hook can continue a turn. It cannot decide that the spec was met."
      steps={[
        { label: "Card", detail: "One job and the files." },
        { label: "Gate", detail: "A command that exits 0." },
        { label: "Commit", detail: "Only the green tree." },
      ]}
    />
  );
}
