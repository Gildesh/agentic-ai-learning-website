import { FigureFrame, HtmlText } from "../frame";

const rows = [
  "0   Start here",
  "1   Generative AI",
  "2   Prompting",
  "3   The tools",
  "4   Vibe coding",
  "5   Skills and instructions",
  "6   Frontend and backend",
  "7   APIs and databases",
  "8   Security and payments",
  "9   React, Next.js, Angular",
  "10  Loop engineering",
  "11  Mixing models",
  "12  Enforcing rules",
  "A   Appendix",
];

export function CourseMapFigure() {
  const rowH = 22;
  const height = 10 + rows.length * rowH;
  return (
    <FigureFrame
      title="The course in order"
      caption="Parts 1 to 12 are the teaching path. Part 0 is this orientation. The appendix is reference material you use while building."
      label="course-map"
      height={height}
    >
      {rows.map((row, index) => (
        <HtmlText key={row} x={16} y={6 + index * rowH} width={328} height={20} size={13} weight={index === 0 ? 700 : 500}>
          {row}
        </HtmlText>
      ))}
    </FigureFrame>
  );
}
