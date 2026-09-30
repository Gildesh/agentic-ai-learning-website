import { Compare } from "../primitives";

export function BenchmarkTrapFigure() {
  return (
    <Compare
      title="A public score is not your route"
      caption="Leaderboards do not run POST /tax. Your gate does."
      columns={[
        {
          heading: "A benchmark",
          cells: ["Someone else's tasks", "A single number", "Changes without your repo"],
        },
        {
          heading: "Your gate",
          cells: ["The bookstore spec", "An exit code", "Same command every time"],
        },
      ]}
    />
  );
}
