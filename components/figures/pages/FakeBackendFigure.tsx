import { Compare } from "../primitives";

export function FakeBackendFigure() {
  return (
    <Compare
      title="A sentence in HTML is not a server decision"
      caption="The backend is the program that could have refused. A painted success never refuses."
      columns={[
        {
          heading: "Fake",
          cells: ["Return the word Paid", "No status check", "Card field in the page"],
        },
        {
          heading: "Real",
          cells: ["Server calls the payer", "200 only after success", "No card on our server"],
        },
      ]}
    />
  );
}
