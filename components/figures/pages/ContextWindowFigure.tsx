import { Stack } from "../primitives";

export function ContextWindowFigure() {
  return (
    <Stack
      title="What fits in one request"
      caption="The context window is the tokens in this request. Older turns fall out unless the app puts them back."
      layers={[
        { label: "New message", detail: "What you just typed." },
        { label: "Earlier turns", detail: "Only the ones the app still sends." },
        { label: "Instructions", detail: "Rules the app prepends." },
      ]}
    />
  );
}
