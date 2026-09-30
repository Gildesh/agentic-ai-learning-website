import { Compare } from "../primitives";

export function ServerClientFigure() {
  return (
    <Compare
      title="Server by default, client when it clicks"
      caption="This Next.js version renders pages as Server Components until a file starts with use client."
      columns={[
        {
          heading: "Server",
          cells: ["Fetch and secrets", "No useState", "Less JavaScript"],
        },
        {
          heading: "Client",
          cells: ["Clicks and state", "use client at top", "Browser APIs"],
        },
      ]}
    />
  );
}
