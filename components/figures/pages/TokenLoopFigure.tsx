import { Flow } from "../primitives";

export function TokenLoopFigure() {
  return (
    <Flow
      title="One token at a time"
      caption="The model does not plan the whole answer and then write it. It chooses a next token, appends it, and repeats."
      steps={[
        { label: "Prompt becomes tokens", detail: "Chunks such as straw and berry, not single letters." },
        { label: "The model picks the next token", detail: "The likely continuation, not a looked-up fact." },
        { label: "That token is appended", detail: "The new sequence is the input for the next pick." },
      ]}
    />
  );
}
