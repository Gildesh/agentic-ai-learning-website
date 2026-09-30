import { Flow } from "../primitives";

export function SlashCommandFigure() {
  return (
    <Flow
      title="Type the name when you want that skill"
      caption="Cursor can hide a skill from automatic use and load it only for /skill-name."
      steps={[
        { label: "You type /review-diff", detail: "An explicit invoke, not a guess." },
        { label: "SKILL.md enters the request", detail: "The instructions for that job." },
        { label: "The agent follows that file", detail: "You still read the diff." },
      ]}
    />
  );
}
