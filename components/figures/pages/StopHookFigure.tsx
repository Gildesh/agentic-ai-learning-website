import { Sequence } from "../primitives";

export function StopHookFigure() {
  return (
    <Sequence
      title="The model stopped. The hook speaks next."
      caption="Cursor's stop hook can send a follow-up. The default cap is 5. Claude Code stops blocking after eight in a row."
      actors={["Agent", "Hook"]}
      messages={[
        { n: 1, from: "Agent", to: "Hook", label: "Turn finished" },
        { n: 2, from: "Hook", to: "Agent", label: "Follow-up, or allow stop" },
      ]}
    />
  );
}
