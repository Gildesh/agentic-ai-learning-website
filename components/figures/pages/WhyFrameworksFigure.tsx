import { Compare } from "../primitives";

export function WhyFrameworksFigure() {
  return (
    <Compare
      title="A string of HTML, or a named piece"
      caption="The framework keeps the title in one component. Copying the markup into every page copies the bug too."
      columns={[
        {
          heading: "Plain HTML",
          cells: ["Repeated markup", "You update every copy", "The browser only draws"],
        },
        {
          heading: "A component",
          cells: ["One BookTitle", "Parents pass the title", "The screen updates"],
        },
      ]}
    />
  );
}
