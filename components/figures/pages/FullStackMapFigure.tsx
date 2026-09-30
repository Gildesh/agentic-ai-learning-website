import { Stack } from "../primitives";

export function FullStackMapFigure() {
  return (
    <Stack
      title="Browser, server, stored rows"
      caption="A full-stack app is these three. A payment company sits beside the server, not inside the HTML."
      layers={[
        { label: "Frontend", detail: "HTML, CSS, and JavaScript in the browser." },
        { label: "Backend", detail: "The server that checks the request." },
        { label: "Database", detail: "Rows the server reads and writes." },
      ]}
    />
  );
}
