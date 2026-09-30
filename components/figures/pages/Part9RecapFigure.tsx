import { Flow } from "../primitives";

export function Part9RecapFigure() {
  return (
    <Flow
      title="Name the piece, then where it runs"
      caption="Props come in. State is owned. A click is a Client Component. A secret stays on the server."
      steps={[
        { label: "Component", detail: "Props in, state owned." },
        { label: "File", detail: "page.tsx or use client." },
        { label: "Action", detail: "POST, then check the caller." },
      ]}
    />
  );
}
