import { Flow } from "../primitives";

export function CleanFolderFigure() {
  return (
    <Flow
      title="A commit, then one window"
      caption="Git is the undo. One project in the window means the agent cannot wander into a second repo."
      steps={[
        { label: "git status is clean", detail: "Or you commit what you want to keep." },
        { label: "One folder open", detail: "The project you mean, nothing else." },
        { label: "Then start the agent", detail: "A bad edit can be diffed against the commit." },
      ]}
    />
  );
}
