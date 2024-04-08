import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <nav className={props.className} aria-label="page navigation">
    <ul className={styles.list}>
      {props.parts.map((part) => (
        <li key={part} className={styles.item}>
          {props.disabled(part) ? (
            <div className={styles.link} aria-disabled="true">
              <div aria-hidden={true}>{props.symbol(part)}</div>
              {part}
            </div>
          ) : (
            <Link className={styles.link} href={props.href(part)}>
              <div aria-hidden={true}>{props.symbol(part)}</div>
              {part}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </nav>
);
