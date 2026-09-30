import { FigureFrame, HtmlText } from "./frame";

export function Flow({
  title,
  caption,
  steps,
}: {
  title: string;
  caption: string;
  steps: { label: string; detail?: string }[];
}) {
  const rowH = 76;
  const gap = 28;
  const height = 12 + steps.length * rowH + Math.max(0, steps.length - 1) * gap;
  const label = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <FigureFrame title={title} caption={caption} label={label} height={height}>
      {steps.map((step, index) => {
        const y = 6 + index * (rowH + gap);
        return (
          <g key={step.label}>
            <rect
              x={8}
              y={y}
              width={344}
              height={rowH}
              rx={12}
              className="fill-pine-soft stroke-pine"
              strokeWidth={1.5}
            />
            <HtmlText x={20} y={y + 12} width={312} height={24} size={16} weight={650}>
              {step.label}
            </HtmlText>
            {step.detail ? (
              <HtmlText x={20} y={y + 38} width={312} height={28} size={13} tone="soft">
                {step.detail}
              </HtmlText>
            ) : null}
            {index < steps.length - 1 ? (
              <g>
                <line
                  x1={180}
                  y1={y + rowH}
                  x2={180}
                  y2={y + rowH + gap - 8}
                  className="stroke-pine"
                  strokeWidth={1.5}
                />
                <polygon
                  points={`174,${y + rowH + gap - 12} 186,${y + rowH + gap - 12} 180,${y + rowH + gap - 4}`}
                  className="fill-pine"
                />
              </g>
            ) : null}
          </g>
        );
      })}
    </FigureFrame>
  );
}

export function Sequence({
  title,
  caption,
  actors,
  messages,
}: {
  title: string;
  caption: string;
  actors: string[];
  messages: { n: number; from: string; to: string; label: string }[];
}) {
  const head = 36;
  const rowH = 48;
  const height = head + messages.length * rowH + 8;
  const col = 344 / Math.max(actors.length, 1);

  return (
    <FigureFrame title={title} caption={caption} label="sequence" height={height}>
      {actors.map((actor, index) => (
        <HtmlText key={actor} x={8 + index * col} y={6} width={col - 4} height={24} size={13} weight={700} tone="pine">
          {actor}
        </HtmlText>
      ))}
      {messages.map((message, index) => {
        const y = head + index * rowH;
        return (
          <g key={message.n}>
            <rect x={8} y={y} width={344} height={40} rx={8} className="fill-paper stroke-line" strokeWidth={1} />
            <HtmlText x={16} y={y + 8} width={328} height={26} size={13}>
              {`${message.n}. ${message.from} → ${message.to}: ${message.label}`}
            </HtmlText>
          </g>
        );
      })}
    </FigureFrame>
  );
}

export function Stack({
  title,
  caption,
  layers,
}: {
  title: string;
  caption: string;
  layers: { label: string; detail?: string }[];
}) {
  const rowH = 58;
  const height = 12 + layers.length * (rowH + 8);
  return (
    <FigureFrame title={title} caption={caption} label="stack" height={height}>
      {layers.map((layer, index) => {
        const y = 6 + index * (rowH + 8);
        const inset = index * 8;
        return (
          <g key={layer.label}>
            <rect
              x={8 + inset}
              y={y}
              width={344 - inset * 2}
              height={rowH}
              rx={12}
              className="fill-pine-soft stroke-pine"
              strokeWidth={1.5}
            />
            <HtmlText x={20 + inset} y={y + 8} width={312 - inset * 2} height={20} size={15} weight={650}>
              {layer.label}
            </HtmlText>
            {layer.detail ? (
              <HtmlText x={20 + inset} y={y + 30} width={312 - inset * 2} height={20} size={12} tone="soft">
                {layer.detail}
              </HtmlText>
            ) : null}
          </g>
        );
      })}
    </FigureFrame>
  );
}

export function Compare({
  title,
  caption,
  columns,
}: {
  title: string;
  caption: string;
  columns: { heading: string; cells: string[] }[];
}) {
  const rows = Math.max(...columns.map((column) => column.cells.length), 0);
  const gap = 8;
  const colW = (344 - gap * (columns.length - 1)) / columns.length;
  const rowH = 36;
  const height = 44 + rows * rowH + 8;

  return (
    <FigureFrame title={title} caption={caption} label="compare" height={height}>
      {columns.map((column, index) => {
        const x = 8 + index * (colW + gap);
        return (
          <g key={column.heading}>
            <HtmlText x={x} y={4} width={colW} height={22} size={13} weight={700} tone="pine">
              {column.heading}
            </HtmlText>
            {column.cells.map((cell, cellIndex) => (
              <g key={`${column.heading}-${cell}`}>
                <rect
                  x={x}
                  y={32 + cellIndex * rowH}
                  width={colW}
                  height={rowH - 6}
                  rx={8}
                  className="fill-paper stroke-line"
                  strokeWidth={1}
                />
                <HtmlText x={x + 6} y={36 + cellIndex * rowH} width={colW - 12} height={rowH - 12} size={12}>
                  {cell}
                </HtmlText>
              </g>
            ))}
          </g>
        );
      })}
    </FigureFrame>
  );
}

export function Annotated({
  title,
  caption,
  kind,
  lines,
  notes,
}: {
  title: string;
  caption: string;
  kind: "editor" | "terminal" | "browser" | "chat";
  lines: string[];
  notes: { n: number; text: string }[];
}) {
  const lineH = 22;
  const windowH = 36 + lines.length * lineH + 12;
  const noteH = 28;
  const height = windowH + 12 + notes.length * noteH;
  const kindLabel = kind[0].toUpperCase() + kind.slice(1);

  return (
    <FigureFrame title={title} caption={caption} label="annotated" height={height}>
      <rect x={8} y={4} width={344} height={windowH} rx={12} className="fill-paper stroke-line" strokeWidth={1.5} />
      <circle cx={28} cy={22} r={4} className="fill-clay" />
      <circle cx={42} cy={22} r={4} className="fill-line" />
      <circle cx={56} cy={22} r={4} className="fill-pine" />
      <HtmlText x={72} y={12} width={200} height={20} size={12} weight={650} tone="soft">
        {kindLabel}
      </HtmlText>
      {lines.map((line, index) => (
        <HtmlText key={line} x={20} y={40 + index * lineH} width={320} height={20} size={13}>
          {line}
        </HtmlText>
      ))}
      {notes.map((note, index) => (
        <g key={note.n}>
          <circle cx={24} cy={windowH + 22 + index * noteH} r={9} className="fill-pine" />
          <HtmlText
            x={16}
            y={windowH + 12 + index * noteH}
            width={16}
            height={18}
            size={11}
            weight={700}
            tone="inverse"
          >
            {String(note.n)}
          </HtmlText>
          <HtmlText x={40} y={windowH + 12 + index * noteH} width={300} height={24} size={13}>
            {note.text}
          </HtmlText>
        </g>
      ))}
    </FigureFrame>
  );
}

export function Tree({
  title,
  caption,
  rows,
}: {
  title: string;
  caption: string;
  rows: { depth: number; label: string }[];
}) {
  const rowH = 28;
  const height = 12 + rows.length * rowH;
  return (
    <FigureFrame title={title} caption={caption} label="tree" height={height}>
      {rows.map((row, index) => (
        <HtmlText key={`${row.label}-${index}`} x={16 + row.depth * 18} y={8 + index * rowH} width={320} height={22} size={14}>
          {row.label}
        </HtmlText>
      ))}
    </FigureFrame>
  );
}

export function Timeline({
  title,
  caption,
  events,
}: {
  title: string;
  caption: string;
  events: { label: string; detail?: string }[];
}) {
  const rowH = 52;
  const height = 8 + events.length * rowH;
  return (
    <FigureFrame title={title} caption={caption} label="timeline" height={height}>
      <line x1={28} y1={16} x2={28} y2={height - 16} className="stroke-pine" strokeWidth={2} />
      {events.map((event, index) => {
        const y = 8 + index * rowH;
        return (
          <g key={event.label}>
            <circle cx={28} cy={y + 16} r={6} className="fill-paper-2 stroke-pine" strokeWidth={2} />
            <HtmlText x={48} y={y + 4} width={290} height={20} size={14} weight={650}>
              {event.label}
            </HtmlText>
            {event.detail ? (
              <HtmlText x={48} y={y + 24} width={290} height={20} size={12} tone="soft">
                {event.detail}
              </HtmlText>
            ) : null}
          </g>
        );
      })}
    </FigureFrame>
  );
}

export function Matrix({
  title,
  caption,
  xAxis,
  yAxis,
  cells,
}: {
  title: string;
  caption: string;
  xAxis: [string, string];
  yAxis: [string, string];
  cells: [[string, string], [string, string]];
}) {
  const height = 210;
  return (
    <FigureFrame title={title} caption={caption} label="matrix" height={height}>
      <HtmlText x={108} y={4} width={110} height={20} size={12} weight={700} tone="pine">
        {xAxis[0]}
      </HtmlText>
      <HtmlText x={230} y={4} width={110} height={20} size={12} weight={700} tone="pine">
        {xAxis[1]}
      </HtmlText>
      {cells.map((row, rowIndex) =>
        row.map((cell, columnIndex) => {
          const x = 100 + columnIndex * 122;
          const y = 36 + rowIndex * 80;
          return (
            <g key={`${rowIndex}-${columnIndex}`}>
              <rect x={x} y={y} width={114} height={70} rx={10} className="fill-pine-soft stroke-pine" strokeWidth={1.5} />
              <HtmlText x={x + 8} y={y + 16} width={98} height={42} size={13}>
                {cell}
              </HtmlText>
            </g>
          );
        }),
      )}
      <HtmlText x={8} y={52} width={88} height={36} size={12} weight={700} tone="pine">
        {yAxis[0]}
      </HtmlText>
      <HtmlText x={8} y={132} width={88} height={36} size={12} weight={700} tone="pine">
        {yAxis[1]}
      </HtmlText>
    </FigureFrame>
  );
}
