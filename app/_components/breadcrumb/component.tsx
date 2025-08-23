import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <nav aria-label="breadcrumb">
    <ol className={styles.container}>
      {props.links.map((link) => (
        <li
          key={link.href}
          className={styles.list}
          aria-current={props.isCurrent(link.href) ? "page" : undefined}
        >
          {props.isCurrent(link.href) ? (
            <>
              {props.links.length > 1 && (
                <div className={styles.divider} role="separator">
                  /
                </div>
              )}
              {link.text}
            </>
          ) : (
            <Link href={link.href} className={styles.link}>
              {link.text}
            </Link>
          )}
        </li>
      ))}
    </ol>
  </nav>
);
