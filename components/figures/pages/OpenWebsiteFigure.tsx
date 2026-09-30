import { Sequence } from "../primitives";

export function OpenWebsiteFigure() {
  return (
    <Sequence
      title="A URL becomes a document"
      caption="The browser asks a host for the page. The host answers with bytes the browser turns into a screen."
      actors={["Browser", "DNS", "Host"]}
      messages={[
        { n: 1, from: "Browser", to: "DNS", label: "What address is this name?" },
        { n: 2, from: "DNS", to: "Browser", label: "An IP address" },
        { n: 3, from: "Browser", to: "Host", label: "GET the page" },
        { n: 4, from: "Host", to: "Browser", label: "HTML, and often CSS and JS" },
      ]}
    />
  );
}
