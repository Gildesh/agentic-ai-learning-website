import { Timeline } from "../primitives";

export function MigrationFileFigure() {
  return (
    <Timeline
      title="A schema change is a file you can replay"
      caption="Edit the model, generate a migration, read the SQL, then apply it. The file is the record."
      events={[
        { label: "Model", detail: "The tables you want." },
        { label: "Migration", detail: "SQL, reviewed." },
        { label: "Apply", detail: "Local, then staging, then production." },
      ]}
    />
  );
}
