import { Box, FigureFrame, Ink } from "./frame";

export function DeskCleared() {
  return (
    <FigureFrame
      label="desk"
      title="The desk is cleared"
      caption="The model sees the desk, not the drawer."
      viewBox="0 0 720 560"
    >
      <Box x={36} y={36} width={400} height={300} fill="#f7f1e6" />
      <Ink x={56} y={72} size={18}>
        This turn&apos;s desk
      </Ink>
      <Box x={56} y={96} width={340} height={58} fill="#fffdf8" />
      <Ink x={72} y={130} size={16} weight={600}>
        Instructions
      </Ink>
      <Box x={56} y={166} width={340} height={58} fill="#fffdf8" />
      <Ink x={72} y={200} size={16} weight={600}>
        This conversation
      </Ink>
      <Box x={56} y={236} width={340} height={58} fill="#e7f0eb" />
      <Ink x={72} y={270} size={16} weight={600}>
        A pasted note
      </Ink>

      <Box x={470} y={36} width={214} height={140} fill="#f8efe6" />
      <Ink x={490} y={78} size={18}>
        Broom
      </Ink>
      <Ink x={490} y={112} size={16} weight={600}>
        New chat
      </Ink>
      <Ink x={490} y={142} size={14} weight={500} fill="#5c5348">
        Sweeps the desk clear
      </Ink>

      <Box x={470} y={200} width={214} height={136} fill="#e7e1d6" stroke="#8a4b2f" />
      <Ink x={490} y={246} size={18}>
        Closed drawer
      </Ink>
      <Ink x={490} y={280} size={15} weight={600}>
        A file the model
      </Ink>
      <Ink x={490} y={304} size={15} weight={600}>
        cannot see until
      </Ink>
      <Ink x={490} y={328} size={15} weight={600} fill="#5c5348">
        someone opens it
      </Ink>
    </FigureFrame>
  );
}
