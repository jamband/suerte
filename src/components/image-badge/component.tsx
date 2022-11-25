import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <button
    type="button"
    className={`d-flex align-items-center gap-2 ps-1 pe-3 py-1 btn rounded-pill ${
      props.className || ""
    }
    `}
    data-bs-toggle={props.dataBsToggle}
    data-bs-target={props.dataBsTarget}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    <svg
      className="rounded-pill"
      width="30"
      height="30"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: Image cap"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill={props.color} />
    </svg>
    <div>{props.text}</div>
  </button>
);
