import { Flow } from "../primitives";

export function WhatYouNeedFigure() {
  return (
    <Flow
      title="Open these before page 1"
      caption="A laptop, a browser, a free GitHub account, and one AI chat. Paid plans are not required to start."
      steps={[
        { label: "Laptop and a current browser", detail: "Chrome, Edge, Firefox, or Safari." },
        { label: "A free GitHub account", detail: "You will store the project there." },
        { label: "One AI chat in the browser", detail: "Use a free tier. Do not enter a card yet." },
      ]}
    />
  );
}
