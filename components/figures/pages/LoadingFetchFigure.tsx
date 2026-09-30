import { Flow } from "../primitives";

export function LoadingFetchFigure() {
  return (
    <Flow
      title="Show something while the row loads"
      caption="loading.tsx covers the page segment. A layout that waits on cookies does not use that fallback."
      steps={[
        { label: "Request", detail: "The page awaits the book." },
        { label: "Fallback", detail: "loading.tsx shows first." },
        { label: "Page", detail: "The title replaces it." },
      ]}
    />
  );
}
