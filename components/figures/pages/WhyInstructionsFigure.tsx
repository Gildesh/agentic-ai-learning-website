import { Flow } from "../primitives";

export function WhyInstructionsFigure() {
  return (
    <Flow
      title="A new session starts blank"
      caption="Written instructions are how the next request still contains the rule."
      steps={[
        { label: "The weights do not update", detail: "Chat does not train the model." },
        { label: "A file holds the rule", detail: "The tool can put that file in the request." },
        { label: "You still check the diff", detail: "Instructions are not a test." },
      ]}
    />
  );
}
