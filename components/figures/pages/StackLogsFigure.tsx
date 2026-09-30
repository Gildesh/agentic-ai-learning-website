import { Compare } from "../primitives";

export function StackLogsFigure() {
  return (
    <Compare
      title="Two logs, two machines"
      caption="The browser console is the frontend. The server process prints the backend. Read the one that failed."
      columns={[
        {
          heading: "Browser",
          cells: ["Console errors", "The request you sent", "The status you received"],
        },
        {
          heading: "Server",
          cells: ["The line that threw", "What it stored", "What it refused"],
        },
      ]}
    />
  );
}
