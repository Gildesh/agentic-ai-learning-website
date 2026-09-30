import { Flow } from "../primitives";

export function SqlStatementsFigure() {
  return (
    <Flow
      title="Four statements cover the first afternoon"
      caption="SELECT reads. INSERT adds. UPDATE changes. DELETE removes. WHERE decides which rows."
      steps={[
        { label: "SELECT", detail: "Read matching rows." },
        { label: "INSERT", detail: "Add a row." },
        { label: "UPDATE or DELETE", detail: "Change or remove matching rows." },
      ]}
    />
  );
}
