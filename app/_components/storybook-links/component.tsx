import { APP_STORYBOOK_URL } from "@/_constants/app";
import { IconArrowUpRightFromSquare } from "@/_icons/arrow-up-right-from-square";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={styles.container}>
    <div className={styles.header}>Stories of Storybook</div>
    <ul className={styles.main}>
      {props.links.map((link) => (
        <li key={link.slug}>
          <a
            href={`${APP_STORYBOOK_URL}/?path=/story/${link.slug}`}
            className={styles.link}
            rel="noreferrer"
            target="_blank"
          >
            {link.text}
            <IconArrowUpRightFromSquare className={styles.linkIcon} />
          </a>
        </li>
      ))}
    </ul>
    <div className={styles.footer}>
      <a
        href={APP_STORYBOOK_URL}
        className={styles.footerLink}
        rel="noreferrer"
        target="_blank"
      >
        You can see the all stories here
        <IconArrowUpRightFromSquare className={styles.footerLinkIcon} />
      </a>
    </div>
  </div>
);
