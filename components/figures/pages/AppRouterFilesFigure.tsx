import { Tree } from "../primitives";

export function AppRouterFilesFigure() {
  return (
    <Tree
      title="A folder is a URL"
      caption="This project's Next.js docs: page.tsx is the route, layout.tsx wraps it, and params is a promise."
      rows={[
        { depth: 0, label: "app/" },
        { depth: 1, label: "layout.tsx  wraps pages" },
        { depth: 1, label: "page.tsx  the / route" },
        { depth: 1, label: "books/[id]/page.tsx" },
      ]}
    />
  );
}
