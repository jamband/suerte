import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <nav aria-label="breadcrumb">
    <ol className={styles.container}>
      {props.items.map((item) => (
        <li
          key={item.pathname}
          className={styles.list}
          aria-current={props.isCurrent(item.pathname) ? "page" : undefined}
        >
          {props.isCurrent(item.pathname) ? (
            <>
              {props.items.length > 1 && (
                <div className={styles.divider} role="separator">
                  /
                </div>
              )}
              {item.text}
            </>
          ) : (
            <Link href={item.pathname} className={styles.link}>
              {item.text}
            </Link>
          )}
        </li>
      ))}
    </ol>
  </nav>
);
