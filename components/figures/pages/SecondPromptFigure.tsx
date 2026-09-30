import { Timeline } from "../primitives";

export function SecondPromptFigure() {
  return (
    <Timeline
      title="The second prompt names the miss"
      caption="Do not resend the first prompt. Say what was wrong and what to keep."
      events={[
        { label: "First reply", detail: "A draft you can point at." },
        { label: "Your note", detail: "Which sentence or field failed." },
        { label: "Second reply", detail: "A revision of that draft." },
      ]}
    />
  );
}
