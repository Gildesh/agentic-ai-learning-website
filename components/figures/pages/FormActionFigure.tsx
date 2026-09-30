import { Sequence } from "../primitives";

export function FormActionFigure() {
  return (
    <Sequence
      title="The form posts to a server function"
      caption="Next.js runs the action with POST. The function still checks who the caller is."
      actors={["Form", "Server"]}
      messages={[
        { n: 1, from: "Form", to: "Server", label: "POST the fields" },
        { n: 2, from: "Server", to: "Form", label: "Updated page, after auth" },
      ]}
    />
  );
}
