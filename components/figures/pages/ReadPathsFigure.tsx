import { Compare } from "../primitives";

export function ReadPathsFigure() {
  return (
    <Compare
      title="Two ways through one page"
      caption="The fast path is enough to continue. The deep path is the same page, read until you could do the try-it on your own app."
      columns={[
        {
          heading: "Fast path",
          cells: ["Hook", "Figure", "Mistake", "Try it"],
        },
        {
          heading: "Deep path",
          cells: ["The idea", "Real example", "Try it on your app", "Glossary term"],
        },
      ]}
    />
  );
}
