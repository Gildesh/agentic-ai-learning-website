import { Flow } from "../primitives";

export function Part5RecapFigure() {
  return (
    <Flow
      title="Instructions, then a check"
      caption="Rules and skills shape the request. The spec says what done means."
      steps={[
        { label: "Standing rules stay short", detail: "CLAUDE.md, AGENTS.md, or .cursor/rules." },
        { label: "A skill is one job", detail: "SKILL.md, loaded when that job starts." },
        { label: "The spec names the check", detail: "docs/SPEC.md, and you point at it." },
      ]}
    />
  );
}
