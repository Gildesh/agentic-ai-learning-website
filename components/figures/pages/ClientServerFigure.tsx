import { Compare } from "../primitives";

export function ClientServerFigure() {
  return (
    <Compare
      title="Two programs, one conversation"
      caption="The client is the browser on the visitor's machine. The server is the program that answers it."
      columns={[
        {
          heading: "Client",
          cells: ["Draws the page", "Sends the click", "Can be inspected locally"],
        },
        {
          heading: "Server",
          cells: ["Checks the request", "Reads stored data", "You do not see it by default"],
        },
      ]}
    />
  );
}
