import { Compare } from "../primitives";

export function EnvFileFigure() {
  return (
    <Compare
      title="The example is committed. The secret file is not."
      caption=".env.example names the keys. .env holds the values, and git must ignore it."
      columns={[
        {
          heading: ".env.example",
          cells: ["KEY=", "Committed", "No real secret"],
        },
        {
          heading: ".env",
          cells: ["KEY=the secret", "Gitignored", "On the server only"],
        },
      ]}
    />
  );
}
