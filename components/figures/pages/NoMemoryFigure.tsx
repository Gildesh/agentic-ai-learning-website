import { Sequence } from "../primitives";

export function NoMemoryFigure() {
  return (
    <Sequence
      title="The app pastes memory. The model does not keep it"
      caption="A new chat starts empty. If the reply knows a prior fact, the app put that text into this request."
      actors={["You", "App", "Model"]}
      messages={[
        { n: 1, from: "You", to: "App", label: "New chat: my store name?" },
        { n: 2, from: "App", to: "Model", label: "Prompt plus saved note" },
        { n: 3, from: "Model", to: "App", label: "Reply from that text only" },
      ]}
    />
  );
}
