import { Matrix } from "../primitives";

export function ModalityMatrixFigure() {
  return (
    <Matrix
      title="Input kind and output kind"
      caption="A code model is still a text model. A multimodal model takes more than one input kind in one request."
      xAxis={["Text out", "Image out"]}
      yAxis={["Text in", "Image in"]}
      cells={[
        ["LLM, including code", "Image model"],
        ["Caption or transcript", "Edit an image"],
      ]}
    />
  );
}
