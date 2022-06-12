type Props = {
  size?: `${number}em`;
};

export const IconChevronDoubleLeft: React.FC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || "1em"}
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
    style={{ display: "inline-block", verticalAlign: "-0.125em" }}
  >
    <path
      fillRule="evenodd"
      d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
    <path
      fillRule="evenodd"
      d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
  </svg>
);
