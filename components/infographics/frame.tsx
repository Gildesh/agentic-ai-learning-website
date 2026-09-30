import type { ReactNode } from "react";

type FrameProps = {
  title: string;
  caption: string;
  label: string;
  viewBox: string;
  children: ReactNode;
};

export function FigureFrame({
  title,
  caption,
  label,
  viewBox,
  children,
}: FrameProps) {
  const titleId = `${label}-title`;
  const descId = `${label}-desc`;
  const width = Number(viewBox.split(" ")[2]);

  return (
    <figure className="my-8 max-w-full">
      <div className="overflow-x-auto rounded-xl border border-line bg-paper-2 p-3 sm:p-4">
        <svg
          role="img"
          aria-labelledby={`${titleId} ${descId}`}
          viewBox={viewBox}
          width={width}
          className="h-auto max-w-none"
        >
          <title id={titleId}>{title}</title>
          <desc id={descId}>{caption}</desc>
          {children}
        </svg>
      </div>
      <figcaption className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">
        <span className="font-semibold text-ink">{title}. </span>
        {caption}
      </figcaption>
    </figure>
  );
}

export function Box({
  x,
  y,
  width,
  height,
  fill,
  stroke = "#1c1712",
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  stroke?: string;
}) {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={14}
      fill={fill}
      stroke={stroke}
      strokeWidth={2}
    />
  );
}

export function Ink({
  x,
  y,
  children,
  size = 16,
  weight = 650,
  fill = "#1c1712",
  anchor = "start",
}: {
  x: number;
  y: number;
  children: ReactNode;
  size?: number;
  weight?: number;
  fill?: string;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      fill={fill}
      fontSize={size}
      fontWeight={weight}
      fontFamily="Segoe UI, sans-serif"
      textAnchor={anchor}
    >
      {children}
    </text>
  );
}
