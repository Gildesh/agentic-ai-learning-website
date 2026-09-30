import { Flow } from "../primitives";

export function ReactHooksFigure() {
  return (
    <Flow
      title="Two React hooks you will see first"
      caption="useState holds a value. useEffect runs after render. Both belong in a Client Component."
      steps={[
        { label: "useState", detail: "The value and a setter." },
        { label: "Render", detail: "The component returns elements." },
        { label: "useEffect", detail: "Work after the screen updates." },
      ]}
    />
  );
}
