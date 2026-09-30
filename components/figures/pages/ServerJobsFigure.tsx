import { Flow } from "../primitives";

export function ServerJobsFigure() {
  return (
    <Flow
      title="What a server is for"
      caption="A server is a program that stays available and refuses work the browser must not do alone."
      steps={[
        { label: "Receive the request", detail: "Method, URL, and body." },
        { label: "Decide", detail: "Allowed, or not, and what to store." },
        { label: "Respond", detail: "A status code and a body." },
      ]}
    />
  );
}
