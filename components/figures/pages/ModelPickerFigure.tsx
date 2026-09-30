import { Flow } from "../primitives";

export function ModelPickerFigure() {
  return (
    <Flow
      title="The picker is a label on a model id"
      caption="Match the name in the tool to the id on the vendor's models page before you compare cost."
      steps={[
        { label: "Open the picker", detail: "The tool lists models it can call." },
        { label: "Read the model id", detail: "Not only the friendly name." },
        { label: "Check the vendor page", detail: "Window and price live there." },
      ]}
    />
  );
}
