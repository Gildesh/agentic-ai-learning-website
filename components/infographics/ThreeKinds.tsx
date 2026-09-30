import { Box, FigureFrame, Ink } from "./frame";

export function ThreeKinds() {
  return (
    <FigureFrame
      label="kinds"
      title="Three kinds of help"
      caption="Pick chat, a recipe, or an agent by whether the next step is chosen."
      viewBox="0 0 720 420"
    >
      <Box x={24} y={28} width={214} height={360} fill="#fffdf8" />
      <Ink x={44} y={68} size={20}>
        Chat
      </Ink>
      <Ink x={44} y={112} size={15} weight={600}>
        What does this
      </Ink>
      <Ink x={44} y={136} size={15} weight={600}>
        word mean?
      </Ink>
      <Ink x={44} y={190} size={14} weight={650} fill="#1e4d3a">
        Pick this when
      </Ink>
      <Ink x={44} y={220} size={14} weight={500}>
        you want an answer
      </Ink>
      <Ink x={44} y={244} size={14} weight={500}>
        and you will ask
      </Ink>
      <Ink x={44} y={268} size={14} weight={500}>
        the next question.
      </Ink>

      <Box x={254} y={28} width={214} height={360} fill="#f8efe6" />
      <Ink x={274} y={68} size={20}>
        Recipe
      </Ink>
      <Ink x={274} y={112} size={15} weight={600}>
        Always save the
      </Ink>
      <Ink x={274} y={136} size={15} weight={600}>
        date as 12 May.
      </Ink>
      <Ink x={274} y={190} size={14} weight={650} fill="#8a4b2f">
        Pick this when
      </Ink>
      <Ink x={274} y={220} size={14} weight={500}>
        the steps never
      </Ink>
      <Ink x={274} y={244} size={14} weight={500}>
        change and never
      </Ink>
      <Ink x={274} y={268} size={14} weight={500}>
        choose.
      </Ink>

      <Box x={484} y={28} width={214} height={360} fill="#e7f0eb" />
      <Ink x={504} y={68} size={20}>
        Agent
      </Ink>
      <Ink x={504} y={112} size={15} weight={600}>
        Decide which of
      </Ink>
      <Ink x={504} y={136} size={15} weight={600}>
        these links is
      </Ink>
      <Ink x={504} y={160} size={15} weight={600}>
        worth opening.
      </Ink>
      <Ink x={504} y={214} size={14} weight={650} fill="#1e4d3a">
        Pick this when
      </Ink>
      <Ink x={504} y={244} size={14} weight={500}>
        the next step
      </Ink>
      <Ink x={504} y={268} size={14} weight={500}>
        depends on what
      </Ink>
      <Ink x={504} y={292} size={14} weight={500}>
        comes back.
      </Ink>
    </FigureFrame>
  );
}
