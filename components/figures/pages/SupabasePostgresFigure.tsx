import { Stack } from "../primitives";

export function SupabasePostgresFigure() {
  return (
    <Stack
      title="Supabase is a Postgres database you connect to"
      caption="The official overview says each project gets a full Postgres database, not an abstraction of one."
      layers={[
        { label: "Your app", detail: "Sends SQL through a client." },
        { label: "Supabase", detail: "Hosts that project's Postgres." },
        { label: "Tables", detail: "Rows, keys, and your migrations." },
      ]}
    />
  );
}
