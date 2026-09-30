import { Compare } from "../primitives";

export function ValidateInputFigure() {
  return (
    <Compare
      title="The browser hints. The server decides."
      caption="A required field in HTML saves a click. The same check in the handler is the boundary."
      columns={[
        {
          heading: "Page",
          cells: ["Can be skipped", "Helps a typo", "Not a boundary"],
        },
        {
          heading: "Handler",
          cells: ["Runs every time", "Rejects with 400", "Types and limits"],
        },
      ]}
    />
  );
}
