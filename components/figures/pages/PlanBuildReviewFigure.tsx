import { Flow } from "../primitives";

export function PlanBuildReviewFigure() {
  return (
    <Flow
      title="Three jobs, not one chat"
      caption="The planner does not implement. The builder does not rewrite the spec. The reviewer does not edit."
      steps={[
        { label: "Plan", detail: "Spec and the card." },
        { label: "Build", detail: "The allow-listed files." },
        { label: "Review", detail: "Diff against the spec." },
      ]}
    />
  );
}
