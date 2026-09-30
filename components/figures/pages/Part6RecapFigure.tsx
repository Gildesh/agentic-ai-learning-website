import { Flow } from "../primitives";

export function Part6RecapFigure() {
  return (
    <Flow
      title="Name the machine before you trust the screen"
      caption="Frontend draws. Backend decides. Hosting is where the backend stays on."
      steps={[
        { label: "What did the browser send?", detail: "Method, URL, body." },
        { label: "What did the server answer?", detail: "Status code and body." },
        { label: "Which log failed?", detail: "Console, or the server process." },
      ]}
    />
  );
}
