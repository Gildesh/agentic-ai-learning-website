import { ImageResponse } from "next/og";

export const alt = "From generative AI to shipping real software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f3efe6",
          color: "#1c1712",
          display: "flex",
        }}
      >
        <div style={{ width: 28, height: "100%", background: "#1e4d3a" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 80px",
            gap: 28,
          }}
        >
          <div style={{ fontSize: 28, color: "#1e4d3a", fontWeight: 700 }}>150 short pages</div>
          <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 700, maxWidth: 900 }}>
            From generative AI to shipping real software
          </div>
        </div>
      </div>
    ),
    size,
  );
}
