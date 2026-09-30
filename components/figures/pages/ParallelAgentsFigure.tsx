import { Tree } from "../primitives";

export function ParallelAgentsFigure() {
  return (
    <Tree
      title="Parallel work needs separate branches"
      caption="Two agents in one working tree will overwrite each other. Merge after each check passes."
      rows={[
        { depth: 0, label: "main" },
        { depth: 1, label: "branch: tax button" },
        { depth: 1, label: "branch: book list" },
        { depth: 0, label: "merge one branch at a time" },
      ]}
    />
  );
}
