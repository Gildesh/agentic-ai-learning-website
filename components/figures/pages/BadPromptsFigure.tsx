import { Compare } from "../primitives";

export function BadPromptsFigure() {
  return (
    <Compare
      title="Vague task, repaired task"
      caption="A bad prompt hides the artifact. A good prompt names it."
      columns={[
        {
          heading: "Too thin",
          cells: ["Make it better", "No file named", "No example"],
        },
        {
          heading: "Repaired",
          cells: ["One artifact", "The failing line", "A sample of the shape"],
        },
      ]}
    />
  );
}
