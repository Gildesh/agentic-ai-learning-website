import { Compare } from "../primitives";

export function JsonShapeFigure() {
  return (
    <Compare
      title="A paragraph is hard to parse. JSON is a shape."
      caption="Ask for keys by name. A program can read the result. A prose paragraph cannot."
      columns={[
        {
          heading: "Prose",
          cells: ["Nice sentences", "Keys are implied", "A parser will fail"],
        },
        {
          heading: "JSON",
          cells: ["title and price", "Quoted keys", "A parser can load it"],
        },
      ]}
    />
  );
}
