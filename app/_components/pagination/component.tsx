import { IconArrowLeft } from "@/_icons/arrow-left";
import { IconArrowRight } from "@/_icons/arrow-right";
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
              {["First", "Previous"].includes(part) ? (
                <IconArrowLeft className={styles.icon} />
              ) : (
                <IconArrowRight className={styles.icon} />
              )}
              {part}
            </div>
          ) : (
            <Link className={styles.link} href={props.href(part)}>
              {["First", "Previous"].includes(part) ? (
                <IconArrowLeft className={styles.icon} />
              ) : (
                <IconArrowRight className={styles.icon} />
              )}
              {part}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </nav>
);
