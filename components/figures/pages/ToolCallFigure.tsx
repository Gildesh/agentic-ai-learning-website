import { Sequence } from "../primitives";

export function ToolCallFigure() {
  return (
    <Sequence
      title="The model asks. The tool answers."
      caption="A tool call is not a memory. The result comes back as text in the next request."
      actors={["Model", "App", "Python"]}
      messages={[
        { n: 1, from: "Model", to: "App", label: "Call count on strawberry" },
        { n: 2, from: "App", to: "Python", label: "Run word.count('r')" },
        { n: 3, from: "Python", to: "App", label: "3" },
        { n: 4, from: "App", to: "Model", label: "Tool result: 3" },
      ]}
    />
  );
}
