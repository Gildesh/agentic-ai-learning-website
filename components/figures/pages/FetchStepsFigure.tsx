import { Flow } from "../primitives";

export function FetchStepsFigure() {
  return (
    <Flow
      title="fetch does not mean success"
      caption="The call finishes when a response arrives, including a 404. Check the status before you read the body."
      steps={[
        { label: "Send", detail: "URL, method, headers, body." },
        { label: "Status", detail: "response.ok is 200 through 299." },
        { label: "Read", detail: "response.json() parses the body." },
      ]}
    />
  );
}
