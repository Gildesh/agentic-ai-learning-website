import { Flow } from "../primitives";

export function AiRiskFigure() {
  return (
    <Flow
      title="Three failures from the 2026 LLM list"
      caption="Prompt injection, a leaked key, and a tool the agent should not have. Each one is a product bug."
      steps={[
        { label: "Injection", detail: "Untrusted text becomes instructions." },
        { label: "Disclosure", detail: "An error prints the secret." },
        { label: "Excessive agency", detail: "The tool can do too much." },
      ]}
    />
  );
}
