import { Timeline } from "../primitives";

export function GitUndoFigure() {
  return (
    <Timeline
      title="The commit is the undo for a session you did not read"
      caption="Restore throws away uncommitted edits. Commit first, or there is nothing to return to."
      events={[
        { label: "Commit", detail: "A snapshot before the experiment." },
        { label: "Let the agent edit", detail: "Several files may change." },
        { label: "git restore or git diff", detail: "Drop the experiment, or read it." },
      ]}
    />
  );
}
