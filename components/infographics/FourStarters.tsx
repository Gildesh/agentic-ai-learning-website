import { Box, FigureFrame, Ink } from "./frame";

const scenes = [
  { title: "A finger on a button", line: "You press go and watch" },
  { title: "A finish-line tape", line: "Keep going until it is true" },
  { title: "A clock", line: "Sunday at 09:00" },
  { title: "A doorbell", line: "A new link lands in a folder" },
];

export function FourStarters() {
  return (
    <FigureFrame
      label="starters"
      title="What starts the next beat"
      caption="The work is the same. The starter is what makes the next beat happen without you typing."
      viewBox="0 0 720 640"
    >
      <Box x={160} y={20} width={400} height={72} fill="#e7f0eb" />
      <Ink x={360} y={64} size={18} anchor="middle">
        The same Sunday study digest
      </Ink>
      {scenes.map((scene, index) => {
        const y = 116 + index * 124;
        return (
          <g key={scene.title}>
            <Box x={48} y={y} width={624} height={108} fill="#fffdf8" />
            <Ink x={72} y={y + 42} size={18}>
              {scene.title}
            </Ink>
            <Ink x={72} y={y + 74} size={16} weight={500} fill="#5c5348">
              {scene.line}
            </Ink>
          </g>
        );
      })}
    </FigureFrame>
  );
}
