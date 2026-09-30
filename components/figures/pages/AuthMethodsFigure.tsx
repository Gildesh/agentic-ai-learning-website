import { Flow } from "../primitives";

export function AuthMethodsFigure() {
  return (
    <Flow
      title="Four ways to answer who is calling"
      caption="Each one ends in a server-side check. The browser storing a guess is not one of them."
      steps={[
        { label: "Session", detail: "Cookie points at a server record." },
        { label: "JWT", detail: "Signed token. Payload is readable." },
        { label: "OAuth or magic link", detail: "Someone else proves the identity." },
      ]}
    />
  );
}
