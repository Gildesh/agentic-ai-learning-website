import { Sequence } from "../primitives";

export function CrossReviewFigure() {
  return (
    <Sequence
      title="The reviewer is a different family"
      caption="Pass the spec path and the diff. Do not pass the builder's summary as the evidence."
      actors={["Builder", "Reviewer"]}
      messages={[
        { n: 1, from: "Builder", to: "Reviewer", label: "Diff only" },
        { n: 2, from: "Reviewer", to: "Builder", label: "Gap, or pass" },
      ]}
    />
  );
}
