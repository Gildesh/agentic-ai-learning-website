import { Stack } from "../primitives";

export function VsCodeSurfacesFigure() {
  return (
    <Stack
      title="Three ways VS Code uses AI"
      caption="As of the VS Code docs checked September 2026. Chat, inline chat, and inline suggestions are different surfaces."
      layers={[
        { label: "Chat", detail: "Questions grounded in your code." },
        { label: "Inline chat", detail: "A focused edit in the editor." },
        { label: "Inline suggestions", detail: "Completions while you type." },
      ]}
    />
  );
}
