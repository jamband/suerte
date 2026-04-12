import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  // biome-ignore lint/a11y/useSemanticElements: button group container, role="group" is appropriate
  <div className={`${styles.container} ${props.className || ""}`} role="group">
    {props.children}
  </div>
);
