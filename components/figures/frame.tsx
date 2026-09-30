import type { ReactNode } from "react";

type FrameProps = {
  title: string;
  caption: string;
  label: string;
  width?: number;
  height: number;
  children: ReactNode;
};

export function FigureFrame({
  title,
  caption,
  label,
  width = 360,
  height,
  children,
}: FrameProps) {
  return (
    <figure className="my-8 max-w-full">
      <div className="rounded-xl border border-line bg-paper-2 p-3 sm:p-4">
        <svg
          role="img"
          aria-label={`${title}. ${caption}`}
          data-figure={label}
          viewBox={`0 0 ${width} ${height}`}
          className="h-auto w-full"
        >
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

export function HtmlText({
  x,
  y,
  width,
  height,
  children,
  size = 14,
  weight = 400,
  tone = "ink",
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  children: ReactNode;
  size?: number;
  weight?: number;
  tone?: "ink" | "soft" | "pine" | "inverse";
}) {
  const color =
    tone === "soft"
      ? "var(--color-ink-soft)"
      : tone === "pine"
        ? "var(--color-pine)"
        : tone === "inverse"
          ? "var(--color-paper)"
          : "var(--color-ink)";

  return (
    <foreignObject x={x} y={y} width={width} height={height}>
      <div
        style={{
          color,
          fontSize: size,
          fontWeight: weight,
          lineHeight: 1.35,
          fontFamily: "var(--font-sans), Segoe UI, sans-serif",
        }}
      >
        {children}
      </div>
    </foreignObject>
  );
}
