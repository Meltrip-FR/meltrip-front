import React from "react";
const Stars = ({
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
    viewBox="0 0 79 80"
    fill={color ? color : "black"}
  >
    <path
      d="M76.5312 28.765H48.2418L39.5 2.5L30.7606 28.765H2.46875L25.3553 45L16.6135 71.2625L39.5 55.0287L62.3865 71.2625L53.6447 45L76.5312 28.765Z"
      fill="#CE5729"
    />
    <path
      d="M57.0702 25.43L61.9164 11.0713L49.0307 20.085L50.8341 25.43H57.0702ZM34.454 62.5438L39.5001 77.5L44.5487 62.5438L39.5001 59.0138L34.454 62.5438ZM62.5582 42.8838L57.8367 46.1863L59.8414 52.1263H75.7697L62.5582 42.8838ZM29.967 20.085L17.0839 11.0713L21.93 25.43H28.1661L29.967 20.085ZM16.442 42.8838L3.23047 52.1263H19.1576L21.1635 46.1863L16.442 42.8838Z"
      fill="#CE5729"
    />
  </svg>
);
export default Stars;
