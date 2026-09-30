import { Stack } from "../primitives";

export function SystemPromptFigure() {
  return (
    <Stack
      title="What the model sees, top to bottom"
      caption="A system prompt is prepended on every request. Your new message is only the bottom layer."
      layers={[
        { label: "System prompt", detail: "Rules the app sends every time." },
        { label: "Earlier turns", detail: "Only if the app still includes them." },
        { label: "Your message", detail: "The task for this turn." },
      ]}
    />
  );
}
