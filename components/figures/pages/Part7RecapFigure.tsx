import { Flow } from "../primitives";

export function Part7RecapFigure() {
  return (
    <Flow
      title="Contract, then rows"
      caption="An API answers HTTP. A table stores the rows that answer came from. A migration changes the table on purpose."
      steps={[
        { label: "Request", detail: "Method, URL, JSON body." },
        { label: "Query", detail: "SQL with a WHERE." },
        { label: "Schema", detail: "A migration you read first." },
      ]}
    />
  );
}
