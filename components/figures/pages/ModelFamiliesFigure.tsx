import { Stack } from "../primitives";

export function ModelFamiliesFigure() {
  return (
    <Stack
      title="Six names you will meet in docs"
      caption="As of September 2026. A family is a line of models. The model id on the request is the specific one you are billed for."
      layers={[
        { label: "GPT", detail: "OpenAI API. Example id: gpt-6.1-sol" },
        { label: "Claude", detail: "Anthropic API. Example id: claude-sonnet-5-5" },
        { label: "Gemini", detail: "Google API. Example id: gemini-3.8-flash" },
        { label: "Grok", detail: "xAI API. Example id: grok-4.7" },
        { label: "Llama", detail: "Meta. Read the model card before you download." },
        { label: "Qwen", detail: "Weights. Example: Qwen3.8-27B" },
      ]}
    />
  );
}
