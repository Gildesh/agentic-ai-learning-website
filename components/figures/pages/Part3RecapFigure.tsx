import { Flow } from "../primitives";

export function Part3RecapFigure() {
  return (
    <Flow
      title="Tool, diff, commit"
      caption="The product changes. The check does not: one project, a diff you read, a commit you can return to."
      steps={[
        { label: "Name the surface", detail: "Editor, terminal, or both." },
        { label: "Read the diff", detail: "Minus line and plus line." },
        { label: "Keep the commit", detail: "Git is how you undo." },
      ]}
    />
  );
}
