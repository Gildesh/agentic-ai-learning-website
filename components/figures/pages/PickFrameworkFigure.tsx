import { Flow } from "../primitives";

export function PickFrameworkFigure() {
  return (
    <Flow
      title="Stay with the repo you have"
      caption="This site is Next.js. A second framework is a second way for the title to be wrong."
      steps={[
        { label: "Already Next.js?", detail: "Keep the App Router." },
        { label: "Team uses Angular?", detail: "Then Angular, not both." },
        { label: "A new repo?", detail: "One framework, written in the spec." },
      ]}
    />
  );
}
