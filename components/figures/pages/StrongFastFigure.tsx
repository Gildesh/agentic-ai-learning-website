import { Compare } from "../primitives";

export function StrongFastFigure() {
  return (
    <Compare
      title="A role, not a trophy"
      caption="Strong means spec and review. Fast means the narrow card. The price list does not decide which role a model earns on your gate."
      columns={[
        {
          heading: "Strong role",
          cells: ["Writes the spec", "Reviews the diff", "Takes the blocked card"],
        },
        {
          heading: "Fast role",
          cells: ["One card", "The file allow-list", "Stops when the gate fails"],
        },
      ]}
    />
  );
}
