import { Tree } from "../primitives";

export function SmallTaskFigure() {
  return (
    <Tree
      title="A card a narrow task can finish"
      caption="One job, the files allowed, and the command that decides done."
      rows={[
        { depth: 0, label: "Task" },
        { depth: 1, label: "One sentence of work" },
        { depth: 1, label: "Files allowed to change" },
        { depth: 1, label: "Check command" },
      ]}
    />
  );
}
