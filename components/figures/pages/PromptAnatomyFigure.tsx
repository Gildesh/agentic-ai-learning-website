import { Stack } from "../primitives";

export function PromptAnatomyFigure() {
  return (
    <Stack
      title="Five slots in one prompt"
      caption="Leave a slot empty and the model fills it with a likely default."
      layers={[
        { label: "Role", detail: "Who is answering, in one line." },
        { label: "Task", detail: "The verb and the artifact." },
        { label: "Context", detail: "Facts the reply must use." },
        { label: "Constraints", detail: "What to leave out." },
        { label: "Output format", detail: "List, table, or JSON." },
      ]}
    />
  );
}
