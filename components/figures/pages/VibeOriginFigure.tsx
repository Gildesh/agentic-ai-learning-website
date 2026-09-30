import { Flow } from "../primitives";

export function VibeOriginFigure() {
  return (
    <Flow
      title="The phrase names a loop that skips the reading"
      caption="Karpathy's February 2025 post named it. The risk is the unread code, not the word."
      steps={[
        { label: "You describe an outcome", detail: "A screen, a command, a feeling of done." },
        { label: "The agent writes files", detail: "You may not open them." },
        { label: "You react to the screen", detail: "The next ask is about what you saw." },
      ]}
    />
  );
}
