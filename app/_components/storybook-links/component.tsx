import { IconBoxArrowUpRight } from "@/_icons/box-arrow-up-right";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={styles.container}>
    <div className={styles.header}>Stories of Storybook</div>
    <ul className={styles.main}>
      {props.links.map((link) => (
        <li key={link.slug}>
          <a
            href={`${props.storybookLink}/?path=/story/${link.slug}`}
            className={styles.link}
            rel="noreferrer"
            target="_blank"
          >
            {link.text}
            <IconBoxArrowUpRight className={styles.linkIcon} />
          </a>
        </li>
      ))}
    </ul>
    <div className={styles.footer}>
      <a
        href={props.storybookLink}
        className={styles.footerLink}
        rel="noreferrer"
        target="_blank"
      >
        You can see the all stories here
        <IconBoxArrowUpRight className={styles.footerLinkIcon} />
      </a>
    </div>
  </div>
);
