import { Box, FigureFrame, Ink } from "./frame";

const parts = [
  { name: "Heartbeat", line: "If this is missing: nothing starts." },
  {
    name: "Separate working folder",
    line: "If this is missing: two runs overwrite one file.",
  },
  {
    name: "Saved instructions",
    line: "If this is missing: every run re-guesses the format.",
  },
  {
    name: "Maker and checker",
    line: "If this is missing: the writer grades itself.",
  },
  {
    name: "Connector",
    line: "If this is missing: it can talk, and it cannot open a page.",
  },
  {
    name: "Spine",
    line: "If this is missing: next Sunday is the first Sunday.",
  },
];

export function SixParts() {
  return (
    <FigureFrame
      label="six"
      title="Six parts"
      caption="Six labels around one Sunday digest. Each line says what fails when that part is missing."
      viewBox="0 0 720 980"
    >
      <Box x={150} y={16} width={420} height={72} fill="#e7f0eb" />
      <Ink x={360} y={60} size={20} anchor="middle">
        Sunday study digest
      </Ink>
      {parts.map((part, index) => {
        const y = 108 + index * 140;
        return (
          <g key={part.name}>
            <Box x={36} y={y} width={648} height={124} fill="#fffdf8" />
            <Ink x={56} y={y + 40} size={20}>
              {part.name}
            </Ink>
            <Ink x={56} y={y + 78} size={15} weight={500} fill="#5c5348">
              {part.line}
            </Ink>
          </g>
        );
      })}
    </FigureFrame>
  );
}
