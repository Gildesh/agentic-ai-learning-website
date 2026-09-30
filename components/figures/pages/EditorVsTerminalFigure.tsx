import { Compare } from "../primitives";

export function EditorVsTerminalFigure() {
  return (
    <Compare
      title="Same loop, two places"
      caption="An editor agent sits in the window with the file. A terminal agent sits in the shell. Both can change the project."
      columns={[
        {
          heading: "Editor",
          cells: ["File is on screen", "You accept a diff", "Inline completions"],
        },
        {
          heading: "Terminal",
          cells: ["You type in a shell", "The log is the transcript", "Commands are native"],
        },
      ]}
    />
  );
}
