import { Timeline } from "../primitives";

export function EnvironmentsFigure() {
  return (
    <Timeline
      title="Three copies, three jobs"
      caption="Local is for you. Staging is a dress rehearsal. Production is the URL customers use."
      events={[
        { label: "Local", detail: "Your machine. Fake data is fine." },
        { label: "Staging", detail: "A hosted copy for a last check." },
        { label: "Production", detail: "The live shop. Real rows." },
      ]}
    />
  );
}
