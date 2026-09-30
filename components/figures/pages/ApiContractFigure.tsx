import { Compare } from "../primitives";

export function ApiContractFigure() {
  return (
    <Compare
      title="A screen for a person, a contract for a program"
      caption="The page is one client. The API is the list of requests the server actually accepts."
      columns={[
        {
          heading: "Page",
          cells: ["A person clicks", "The browser draws", "Easy to fake"],
        },
        {
          heading: "API",
          cells: ["A program calls", "A status comes back", "You can replay it"],
        },
      ]}
    />
  );
}
