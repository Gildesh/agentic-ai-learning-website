import { Flow } from "../primitives";

export function WhoThisIsForFigure() {
  return (
    <Flow
      title="What you are learning to do"
      caption="You write the outcome, an agent changes the project, and you check the result against the outcome."
      steps={[
        { label: "You write the outcome", detail: "One sentence a second person could test." },
        { label: "An agent changes the project", detail: "It reads files, edits them, and runs commands." },
        { label: "You check the result", detail: "A passing check is evidence. A confident reply is not." },
      ]}
    />
  );
}
