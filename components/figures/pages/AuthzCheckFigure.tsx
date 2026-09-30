import { Flow } from "../primitives";

export function AuthzCheckFigure() {
  return (
    <Flow
      title="Logged in is not the same as allowed"
      caption="The order row has an owner. The handler compares that owner to the caller, then decides."
      steps={[
        { label: "Who", detail: "The session names the user." },
        { label: "Which row", detail: "Load the order by its id." },
        { label: "Allowed?", detail: "Owner matches, or refuse with 403." },
      ]}
    />
  );
}
