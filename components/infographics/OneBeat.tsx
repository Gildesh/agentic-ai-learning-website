import { Box, FigureFrame, Ink } from "./frame";

export function OneBeat() {
  return (
    <FigureFrame
      label="beat"
      title="One beat"
      caption="A beat returns to the desk. “The model says stop” does not pass through the finish line."
      viewBox="0 0 720 520"
    >
      <Box x={230} y={24} width={260} height={88} fill="#e7f0eb" />
      <Ink x={360} y={62} size={18} anchor="middle">
        See the desk
      </Ink>
      <Ink x={360} y={88} size={14} weight={500} fill="#5c5348" anchor="middle">
        What is in front of it now
      </Ink>

      <Ink x={360} y={140} size={22} anchor="middle" fill="#1e4d3a">
        ↓
      </Ink>

      <Box x={230} y={156} width={260} height={88} fill="#fffdf8" />
      <Ink x={360} y={194} size={18} anchor="middle">
        Choose
      </Ink>
      <Ink x={360} y={220} size={14} weight={500} fill="#5c5348" anchor="middle">
        A tool, or a reply
      </Ink>

      <Ink x={360} y={272} size={22} anchor="middle" fill="#1e4d3a">
        ↓
      </Ink>

      <Box x={230} y={288} width={260} height={88} fill="#fffdf8" />
      <Ink x={360} y={326} size={18} anchor="middle">
        Tool result returns
      </Ink>
      <Ink x={360} y={352} size={14} weight={500} fill="#5c5348" anchor="middle">
        Text, saved, or a failure
      </Ink>

      <Ink x={360} y={404} size={18} anchor="middle" fill="#1e4d3a">
        back to see the desk
      </Ink>

      <Box x={24} y={288} width={180} height={120} fill="#f8efe6" stroke="#8a4b2f" />
      <Ink x={114} y={330} size={15} anchor="middle">
        Side door
      </Ink>
      <Ink x={114} y={358} size={14} weight={600} anchor="middle">
        Model says stop
      </Ink>
      <Ink x={114} y={384} size={13} weight={500} fill="#5c5348" anchor="middle">
        Skips the finish line
      </Ink>
    </FigureFrame>
  );
}
