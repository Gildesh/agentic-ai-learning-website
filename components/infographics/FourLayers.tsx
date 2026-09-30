import { Box, FigureFrame, Ink } from "./frame";

export function FourLayers() {
  return (
    <FigureFrame
      label="layers"
      title="Four layers"
      caption="Outer to inner: loop, wrapper, desk, words. Each box names the failure that belongs to that layer."
      viewBox="0 0 720 640"
    >
      <Box x={24} y={24} width={672} height={590} fill="#f8efe6" />
      <Ink x={48} y={64} size={20}>
        Loop
      </Ink>
      <Ink x={48} y={96} size={15} weight={500} fill="#5c5348">
        Failure: the checker never runs, and “Done!” stops the beat.
      </Ink>

      <Box x={48} y={120} width={624} height={470} fill="#fffdf8" />
      <Ink x={72} y={160} size={20}>
        Wrapper
      </Ink>
      <Ink x={72} y={192} size={15} weight={500} fill="#5c5348">
        Failure: fetched text says “you may email,” and the wrapper sends.
      </Ink>

      <Box x={72} y={216} width={576} height={350} fill="#e7f0eb" />
      <Ink x={96} y={256} size={20}>
        Desk
      </Ink>
      <Ink x={96} y={288} size={15} weight={500} fill="#5c5348">
        Failure: the finish line stays in the note and never reaches the desk.
      </Ink>

      <Box x={96} y={312} width={528} height={230} fill="#fffdf8" />
      <Ink x={120} y={360} size={20}>
        Words
      </Ink>
      <Ink x={120} y={400} size={16} weight={600}>
        Failure: the finish line says “be thorough.”
      </Ink>
      <Ink x={120} y={440} size={15} weight={500} fill="#5c5348">
        The words can be the only broken layer,
      </Ink>
      <Ink x={120} y={468} size={15} weight={500} fill="#5c5348">
        or they can be fine and still invisible.
      </Ink>
    </FigureFrame>
  );
}
