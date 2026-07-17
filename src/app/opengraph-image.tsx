import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#f5f8ff", display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}><div style={{ fontSize: 76, fontWeight: 900, color: "#0b1739" }}>Nuranova Solutions</div><div style={{ position: "absolute", bottom: 80, fontSize: 34, color: "#075bc4" }}>Websites That Help Your Business Grow</div></div>, size);
}
