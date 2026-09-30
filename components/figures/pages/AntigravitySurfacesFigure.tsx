import { Stack } from "../primitives";

export function AntigravitySurfacesFigure() {
  return (
    <Stack
      title="Antigravity names three surfaces"
      caption="From the getting-started docs checked September 2026. The IDE page also names Tab, Command, and Agents."
      layers={[
        { label: "Antigravity IDE", detail: "Editor, with Tab and an agent." },
        { label: "Antigravity CLI", detail: "A terminal UI for agents." },
        { label: "Antigravity 2.0", detail: "The desktop app the docs list." },
      ]}
    />
  );
}
