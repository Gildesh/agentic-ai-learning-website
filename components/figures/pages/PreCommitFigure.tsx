import { Sequence } from "../primitives";

export function PreCommitFigure() {
  return (
    <Sequence
      title="The commit waits on the hook"
      caption="A pre-commit hook runs locally. Exit 1 means git does not make the snapshot."
      actors={["You", "Hook", "Git"]}
      messages={[
        { n: 1, from: "You", to: "Hook", label: "git commit" },
        { n: 2, from: "Hook", to: "Git", label: "Exit 0, or refuse" },
      ]}
    />
  );
}
