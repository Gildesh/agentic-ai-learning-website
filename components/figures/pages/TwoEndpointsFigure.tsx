import { Compare } from "../primitives";

export function TwoEndpointsFigure() {
  return (
    <Compare
      title="Same request, two servers"
      caption="Next.js exports a function from route.ts. FastAPI decorates a function. Both answer GET /books/42."
      columns={[
        {
          heading: "Next.js",
          cells: ["route.ts under app/api", "export async function GET", "await the params promise"],
        },
        {
          heading: "FastAPI",
          cells: ["decorator names the path", "argument is the book id", "docs page at /docs"],
        },
      ]}
    />
  );
}
