import { Annotated } from "../primitives";

export function BugReportFigure() {
  return (
    <Annotated
      title="A bug report the agent can check"
      caption="Command, error, expected result. The story around them is optional."
      kind="terminal"
      lines={["python tax.py", "TypeError line 4", "expect: print 80"]}
      notes={[
        { n: 1, text: "The command is what you will rerun." },
        { n: 2, text: "The expected line is the pass mark." },
      ]}
    />
  );
}
