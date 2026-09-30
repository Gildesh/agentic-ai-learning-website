import { Matrix } from "../primitives";

export function ToolChoiceMatrixFigure() {
  return (
    <Matrix
      title="Pick the surface from the job"
      caption="This is not a ranking. It is where the work already lives."
      xAxis={["One file", "Many files"]}
      yAxis={["You are in the editor", "You are in the shell"]}
      cells={[
        ["Inline edit or Tab", "Editor agent, then a diff"],
        ["A single command", "Terminal agent, then the log"],
      ]}
    />
  );
}
