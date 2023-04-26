const Logo = ({
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
    viewBox="0 0 146 62"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 14H5.0132L15.0879 38.1162L24.9695 14H30V50.9949H24.6773V27.9242H24.5536L17.2058 45.6944H12.7694L5.4155 27.9242H5.32266V51H0V14Z"
      fill="white"
    />
    <path
      d="M41.3617 39.5181C41.3617 41.6357 41.978 43.2454 43.2105 44.3472C44.355 45.4641 45.8645 46.023 47.7389 46.0238C49.917 46.0238 51.8636 45.168 53.5786 43.4564L57.4652 46.7288C54.7412 49.6096 51.5374 51.0331 47.8538 50.9994C46.458 51.0022 45.0702 50.7976 43.7401 50.3929C43.057 50.1677 42.402 49.8711 41.7869 49.5085C41.1143 49.1834 40.4848 48.7826 39.9116 48.3145C38.7794 47.3281 37.8612 45.9543 37.1569 44.193C36.3856 42.5 36 40.299 36 37.59C36 34.9839 36.3341 32.817 37.0023 31.0894C37.6706 29.3281 38.5272 27.9383 39.5722 26.9199C40.5718 25.9272 41.793 25.1635 43.1445 24.6861C44.3773 24.2409 45.683 24.0086 47.0007 24C50.0504 24.0345 52.6286 25.0251 54.7355 26.9717C56.8775 28.9529 57.9657 31.6795 58 35.1515V39.5143L41.3617 39.5181ZM52.6463 35.1553C52.5776 33.0958 52.0194 31.5375 50.9717 30.4804C49.9417 29.4772 48.621 28.9756 47.0099 28.9756C45.3988 28.9756 44.076 29.4772 43.0415 30.4804C42.0237 31.5417 41.4638 33.1 41.3617 35.1553H52.6463Z"
      fill="white"
    />
    <path
      d="M76.7001 16H82.0764V24.168H86V28.3016H82.0764V43.9457C82.0411 45.3081 82.6778 45.9718 83.9865 45.9366H86V51H83.1912C81.3028 51 79.7563 50.4148 78.5519 49.2445C77.3147 48.1256 76.6961 46.5072 76.6961 44.3894V28.3016H74V24.168H76.7001V16Z"
      fill="white"
    />
    <path
      d="M92 24.3336H97.0533V27.1596H97.1592C98.8245 25.0532 101.009 24 103.711 24C105.657 24.0044 107.536 24.7308 109 26.0451L105.307 30.681C104.238 29.7871 103.129 29.3406 101.981 29.3415C100.743 29.3182 99.5471 29.799 98.6542 30.6784C97.6177 31.5544 97.0832 32.9693 97.0508 34.9232V51H92V24.3336Z"
      fill="white"
    />
    <path
      d="M115 14H120V19.2753H115V14ZM115 24.6578H120V51H115V24.6578Z"
      fill="white"
    />
    <path
      d="M125 24.3355H130.279V27.1258C132.034 25.1285 134.296 24.0865 137.066 24C140.291 24.0857 142.646 25.257 144.131 27.5139C144.855 28.357 145.351 29.4675 145.621 30.8453C145.874 32.2068 146 34.5147 146 37.769C146 40.9393 145.873 43.2125 145.62 44.5886C145.351 45.9664 144.853 47.0944 144.127 47.9727C143.39 49.0157 142.407 49.8667 141.264 50.4532C140.101 51.0907 138.7 51.4266 137.062 51.4609C135.796 51.4817 134.547 51.1713 133.442 50.5612C132.264 49.991 131.194 49.226 130.277 48.2991V62H125V24.3355ZM135.474 46.0885C136.725 46.0885 137.714 45.8464 138.44 45.3623C139.141 44.8932 139.68 44.2242 139.986 43.4447C140.337 42.5798 140.567 41.6718 140.671 40.7457C140.704 39.7783 140.72 38.7848 140.721 37.7651C140.721 36.6932 140.704 35.6479 140.671 34.6291C140.576 33.7014 140.345 32.7922 139.986 31.9301C139.697 31.1436 139.154 30.4733 138.44 30.0227C137.713 29.5943 136.724 29.3801 135.474 29.3801C134.292 29.3801 133.355 29.6307 132.662 30.132C131.945 30.6195 131.39 31.3042 131.065 32.101C130.735 32.9503 130.521 33.8395 130.431 34.7448C130.329 35.7481 130.279 36.7592 130.279 37.778C130.279 38.7302 130.33 39.6818 130.431 40.6287C130.516 41.5604 130.729 42.4763 131.065 43.3509C131.39 44.1468 131.946 44.8306 132.662 45.3173C133.354 45.8314 134.291 46.0885 135.474 46.0885Z"
      fill="white"
    />
    <path d="M69 0H64V51H69V0Z" fill="white" />
  </svg>
);

export default Logo;
