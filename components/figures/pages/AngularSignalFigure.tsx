import { Flow } from "../primitives";

export function AngularSignalFigure() {
  return (
    <Flow
      title="A class, a template, a signal"
      caption="Angular's docs: a component is a class with @Component. You read a signal by calling it."
      steps={[
        { label: "@Component", detail: "The class and its template." },
        { label: "signal", detail: "Holds the value." },
        { label: "Call it", detail: "The template reads count()." },
      ]}
    />
  );
}
