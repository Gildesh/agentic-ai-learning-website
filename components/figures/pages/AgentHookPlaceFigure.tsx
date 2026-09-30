import { Compare } from "../primitives";

export function AgentHookPlaceFigure() {
  return (
    <Compare
      title="Where the agent hook sits"
      caption="Cursor reads hooks.json. Claude Code runs a hook on events such as PreToolUse and Stop."
      columns={[
        {
          heading: "Cursor",
          cells: ["hooks.json", "stop can follow up", "failClosed can block"],
        },
        {
          heading: "Claude Code",
          cells: ["Hook command", "PreToolUse can block", "Stop can continue"],
        },
      ]}
    />
  );
}
