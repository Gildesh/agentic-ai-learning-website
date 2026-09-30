import { Flow } from "../primitives";

export function SecretScanFigure() {
  return (
    <Flow
      title="Stop the secret before the history"
      caption="GitHub push protection blocks a push that contains a detected secret. A local grep still matters."
      steps={[
        { label: "Scan", detail: "The commit or the push." },
        { label: "Block", detail: "The secret does not land." },
        { label: "Rotate", detail: "If it already landed." },
      ]}
    />
  );
}
