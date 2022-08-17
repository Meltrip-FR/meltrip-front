const Eyes = ({
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
    height={size ? size : height}
    width={size ? size : width}
    viewBox="0 0 48 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.1937 15.497C31.1937 19.3896 27.9672 22.5453 23.987 22.5453C20.0068 22.5453 16.7802 19.3896 16.7802 15.497C16.7802 11.6042 20.0068 8.44863 23.987 8.44863C27.9672 8.44859 31.1937 11.6043 31.1937 15.497ZM24 0.821289C19.879 0.83995 15.6074 1.86409 11.5638 3.82487C8.56152 5.34068 5.6356 7.47929 3.09576 10.119C1.84832 11.4664 0.25724 13.4175 0 15.4992C0.0304 17.3025 1.9252 19.5282 3.09576 20.8796C5.47748 23.4156 8.3272 25.4945 11.5638 27.1752C15.3347 29.0434 19.5085 30.119 24 30.1788C28.1249 30.1598 32.3955 29.1239 36.4346 27.1752C39.437 25.6594 42.3644 23.5192 44.9042 20.8796C46.1516 19.5321 47.7427 17.581 48 15.4992C47.9696 13.696 46.0748 11.4702 44.9042 10.1189C42.5225 7.58288 39.6713 5.50557 36.4346 3.82478C32.6658 1.95805 28.4817 0.889848 24 0.821289ZM23.997 4.46558C30.2417 4.46558 35.304 9.40617 35.304 15.5008C35.304 21.5955 30.2417 26.536 23.997 26.536C17.7522 26.536 12.69 21.5954 12.69 15.5008C12.69 9.40617 17.7522 4.46558 23.997 4.46558Z"
      fill="#CE5729"
    />
  </svg>
);

export default Eyes;
