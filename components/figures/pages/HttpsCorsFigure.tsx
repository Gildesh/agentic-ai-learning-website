import { Compare } from "../primitives";

export function HttpsCorsFigure() {
  return (
    <Compare
      title="HTTPS hides the bytes. CORS is a browser rule."
      caption="curl does not enforce CORS. A lock icon does not mean the caller is allowed."
      columns={[
        {
          heading: "HTTPS",
          cells: ["Encrypts the connection", "Needed for live payments", "Not an identity check"],
        },
        {
          heading: "CORS",
          cells: ["Browser asks the server", "Other sites can be refused", "Your server still checks auth"],
        },
      ]}
    />
  );
}
