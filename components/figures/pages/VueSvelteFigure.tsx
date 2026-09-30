import { Compare } from "../primitives";

export function VueSvelteFigure() {
  return (
    <Compare
      title="A .vue file, or a compiled .svelte file"
      caption="Vue colocates template, script, and style. Svelte's docs say a compiler turns the component into JavaScript."
      columns={[
        {
          heading: "Vue",
          cells: ["A .vue file", "template, script, style", "Compiled to a module"],
        },
        {
          heading: "Svelte",
          cells: ["A .svelte file", "HTML, CSS, and JS", "SvelteKit for the app"],
        },
      ]}
    />
  );
}
