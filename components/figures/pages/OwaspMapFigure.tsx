import { Tree } from "../primitives";

export function OwaspMapFigure() {
  return (
    <Tree
      title="OWASP Top 10:2025, in order"
      caption="The 2025 list is not the 2021 list. Injection is A05. Broken access control is still A01."
      rows={[
        { depth: 0, label: "A01 Broken access control" },
        { depth: 0, label: "A02 Security misconfiguration" },
        { depth: 0, label: "A03 Software supply chain" },
        { depth: 0, label: "A04 Cryptographic failures" },
        { depth: 0, label: "A05 Injection" },
        { depth: 0, label: "A06 Insecure design" },
        { depth: 0, label: "A07 Authentication failures" },
        { depth: 0, label: "A08 Integrity failures" },
        { depth: 0, label: "A09 Logging and alerting" },
        { depth: 0, label: "A10 Exceptional conditions" },
      ]}
    />
  );
}
