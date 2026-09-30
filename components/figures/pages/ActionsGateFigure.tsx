import { Flow } from "../primitives";

export function ActionsGateFigure() {
  return (
    <Flow
      title="The same gate, on GitHub's runner"
      caption="A pull request runs the commands. A red check is the review. Your laptop is not the only place they run."
      steps={[
        { label: "Push or PR", detail: "The workflow starts." },
        { label: "Checkout", detail: "The repo at that commit." },
        { label: "Commands", detail: "Lint and the course check." },
      ]}
    />
  );
}
