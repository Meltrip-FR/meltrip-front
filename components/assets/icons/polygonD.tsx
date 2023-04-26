import React from "react";
const PolygonD = ({
  color,
  size,
  height,
  width,
}: {
  color?: string;
  size?: number;
  height?: number;
  width?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size ? size : height}
    width={size ? size : width}
    viewBox="0 0 52 92"
  >
    <path d="M51.3887 45.7998L0.846848 91.5258V0.0738335L51.3887 45.7998Z" />
  </svg>
);
export default PolygonD;
