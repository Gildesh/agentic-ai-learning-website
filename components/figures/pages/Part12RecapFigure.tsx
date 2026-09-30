import { Flow } from "../primitives";

export function Part12RecapFigure() {
  return (
    <Flow
      title="The rule is real when a command fails"
      caption="Lint, the course check, a pre-commit hook, and GitHub Actions are the same idea in four places."
      steps={[
        { label: "Local", detail: "Lint and pre-commit." },
        { label: "Remote", detail: "GitHub Actions on the PR." },
        { label: "Agent", detail: "A hook that cannot be talked out of it." },
      ]}
    />
  );
}
