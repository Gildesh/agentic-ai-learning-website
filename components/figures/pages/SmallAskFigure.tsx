import { Compare } from "../primitives";

export function SmallAskFigure() {
  return (
    <Compare
      title="One ask, one check"
      caption="A large ask hides which sentence produced which file."
      columns={[
        {
          heading: "One large ask",
          cells: ["Screen, tax, and pay", "One tangled diff", "No single check"],
        },
        {
          heading: "Small asks",
          cells: ["The list of books", "Then the tax function", "Each has a command"],
        },
      ]}
    />
  );
}
