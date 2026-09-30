import { Stack } from "../primitives";

export function AuthHeaderFigure() {
  return (
    <Stack
      title="Where a key is allowed to live"
      caption="The browser bundle is public. The server process is where the key stays."
      layers={[
        { label: "Request header", detail: "Authorization: Bearer, if the docs say so." },
        { label: "Server", detail: "Reads the key from the environment." },
        { label: "Browser", detail: "Never contains the key." },
      ]}
    />
  );
}
