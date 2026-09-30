import { Compare } from "../primitives";

export function PropsStateFigure() {
  return (
    <Compare
      title="Passed in, or owned here"
      caption="Props come from the parent. State lives in this component and can change."
      columns={[
        {
          heading: "Props",
          cells: ["Parent passes them", "Child reads them", "Do not assign over them"],
        },
        {
          heading: "State",
          cells: ["This component owns it", "A click can change it", "The screen redraws"],
        },
      ]}
    />
  );
}
