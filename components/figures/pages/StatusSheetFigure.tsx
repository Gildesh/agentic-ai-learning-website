import { Tree } from "../primitives";

export function StatusSheetFigure() {
  return (
    <Tree
      title="The first digit is the group"
      caption="2xx worked. 4xx was the request. 5xx was the server. Read the code before the sentence in the body."
      rows={[
        { depth: 0, label: "200, 201, 204" },
        { depth: 0, label: "400, 401, 403, 404" },
        { depth: 0, label: "500" },
      ]}
    />
  );
}
