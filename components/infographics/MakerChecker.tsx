import { Box, FigureFrame, Ink } from "./frame";

export function MakerChecker() {
  return (
    <FigureFrame
      label="maker"
      title="Maker and checker"
      caption="The draft moves from the maker to the checker. Only the checker can say pass. After pass, a human gate stands in front of send."
      viewBox="0 0 720 560"
    >
      <Box x={36} y={40} width={200} height={150} fill="#fffdf8" />
      <Ink x={136} y={100} size={20} anchor="middle">
        Maker
      </Ink>
      <Ink x={136} y={134} size={15} weight={500} fill="#5c5348" anchor="middle">
        Writes the draft
      </Ink>

      <Ink x={268} y={120} size={28} anchor="middle" fill="#1e4d3a">
        →
      </Ink>

      <Box x={300} y={40} width={220} height={150} fill="#e7f0eb" />
      <Ink x={410} y={96} size={20} anchor="middle">
        Checker
      </Ink>
      <Ink x={410} y={130} size={15} weight={500} fill="#5c5348" anchor="middle">
        Only this pass
      </Ink>
      <Ink x={410} y={154} size={15} weight={500} fill="#5c5348" anchor="middle">
        can say pass
      </Ink>

      <Ink x={410} y={230} size={22} anchor="middle" fill="#1e4d3a">
        ↓ after pass
      </Ink>

      <Box x={250} y={260} width={320} height={140} fill="#f8efe6" stroke="#8a4b2f" />
      <Ink x={410} y={316} size={20} anchor="middle">
        Human gate
      </Ink>
      <Ink x={410} y={350} size={16} weight={600} anchor="middle">
        Stands in front of send
      </Ink>

      <Box x={36} y={430} width={648} height={90} fill="#f7f1e6" />
      <Ink x={56} y={484} size={16} weight={600}>
        A pass grades the brief. It does not grant a new permission.
      </Ink>
    </FigureFrame>
  );
}
