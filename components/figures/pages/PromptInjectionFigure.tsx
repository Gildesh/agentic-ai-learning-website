import { Sequence } from "../primitives";

export function PromptInjectionFigure() {
  return (
    <Sequence
      title="Page text can contain instructions"
      caption="The agent fetched a page. The page is data. Instructions inside it are not your instructions."
      actors={["You", "Agent", "Page"]}
      messages={[
        { n: 1, from: "You", to: "Agent", label: "Summarize this URL" },
        { n: 2, from: "Agent", to: "Page", label: "Fetch the page" },
        { n: 3, from: "Page", to: "Agent", label: "Hidden instruction in the text" },
      ]}
    />
  );
}
