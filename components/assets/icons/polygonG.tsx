import React from "react";
const PolygonG = ({
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
    stroke={color ? color : "currentColor"}
    viewBox="0 0 51 92"
    fill={color ? color : "black"}
  >
    <path d="M0 45.7998L50.5418 0.0737915L50.5418 91.5258L0 45.7998Z" />
  </svg>
);
export default PolygonG;
