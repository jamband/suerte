import { Icon } from "./base";

export const IconChevronLeft: React.FC<{ className: string }> = (props) => (
  <Icon viewBox="0 0 16 16" className={props.className}>
    <path
      fillRule="evenodd"
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
  </Icon>
);
