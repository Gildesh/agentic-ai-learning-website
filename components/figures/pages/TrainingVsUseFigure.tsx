import { Compare } from "../primitives";

export function TrainingVsUseFigure() {
  return (
    <Compare
      title="Training changes weights. Using them does not"
      caption="A chat request is inference. The weights stay as they were after training, unless a separate fine-tuning job updates them."
      columns={[
        {
          heading: "Training",
          cells: ["Examples in", "Weights update", "You do not watch this"],
        },
        {
          heading: "Inference",
          cells: ["Your prompt in", "Next token out", "Weights stay fixed"],
        },
      ]}
    />
  );
}
