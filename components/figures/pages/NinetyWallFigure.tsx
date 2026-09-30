import { Flow } from "../primitives";

export function NinetyWallFigure() {
  return (
    <Flow
      title="The screen can look finished while a check is missing"
      caption="Ninety percent is a feeling. The missing ten percent is usually a case you have not run."
      steps={[
        { label: "Happy path works", detail: "The demo click does the right thing." },
        { label: "An edge does not", detail: "Empty input, a second click, a bad id." },
        { label: "Name that case", detail: "One more ask, with the exact input." },
      ]}
    />
  );
}
