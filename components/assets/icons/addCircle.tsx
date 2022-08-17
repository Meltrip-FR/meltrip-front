const AddCircle = ({
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
    viewBox="0 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24.4998 2.04199C12.0967 2.04199 2.0415 12.0972 2.0415 24.5003C2.0415 36.9035 12.0967 46.9587 24.4998 46.9587C36.903 46.9587 46.9582 36.9035 46.9582 24.5003C46.9582 12.0972 36.903 2.04199 24.4998 2.04199ZM26.5415 32.667C26.5415 33.2085 26.3264 33.7278 25.9435 34.1107C25.5606 34.4936 25.0413 34.7087 24.4998 34.7087C23.9584 34.7087 23.439 34.4936 23.0562 34.1107C22.6733 33.7278 22.4582 33.2085 22.4582 32.667V26.542H16.3332C15.7917 26.542 15.2724 26.3269 14.8895 25.944C14.5066 25.5611 14.2915 25.0418 14.2915 24.5003C14.2915 23.9588 14.5066 23.4395 14.8895 23.0567C15.2724 22.6738 15.7917 22.4587 16.3332 22.4587H22.4582V16.3337C22.4582 15.7922 22.6733 15.2729 23.0562 14.89C23.439 14.5071 23.9584 14.292 24.4998 14.292C25.0413 14.292 25.5606 14.5071 25.9435 14.89C26.3264 15.2729 26.5415 15.7922 26.5415 16.3337V22.4587H32.6665C33.208 22.4587 33.7273 22.6738 34.1102 23.0567C34.4931 23.4395 34.7082 23.9588 34.7082 24.5003C34.7082 25.0418 34.4931 25.5611 34.1102 25.944C33.7273 26.3269 33.208 26.542 32.6665 26.542H26.5415V32.667Z"
      fill="black"
    />
  </svg>
);

export default AddCircle;
