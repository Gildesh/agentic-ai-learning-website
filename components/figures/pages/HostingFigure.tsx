import { Compare } from "../primitives";

export function HostingFigure() {
  return (
    <Compare
      title="Your laptop, or a host that stays on"
      caption="localhost answers only while your machine runs the program. A public URL needs hosting."
      columns={[
        {
          heading: "Local",
          cells: ["You start the program", "Only you can open it", "Stops when you close it"],
        },
        {
          heading: "Hosted",
          cells: ["A machine stays up", "A public name points at it", "You still read the logs"],
        },
      ]}
    />
  );
}
