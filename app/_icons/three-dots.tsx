import { Icon } from "./base";

export const IconThreeDots: React.FC<{ className: string }> = (props) => (
  <Icon viewBox="0 0 16 16" className={props.className}>
    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
  </Icon>
);
