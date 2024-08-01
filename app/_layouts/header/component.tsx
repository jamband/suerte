import { APP_NAME, APP_STORYBOOK_URL } from "@/_constants/app";
import { IconStorybook } from "@/_icons/storybook";
import Link from "next/link";
import styles from "./styles.module.css";

export const Component: React.FC = () => (
  <header className={styles.container}>
    <nav className={styles.navigation} aria-label="header navigation">
      <Link href="/" className={styles.brandLink}>
        {APP_NAME}
      </Link>
      <a
        href={APP_STORYBOOK_URL}
        className={styles.storybookLink}
        rel="noreferrer"
        target="_blank"
      >
        <IconStorybook className={styles.storybookLinkIcon} />
        Storybook
      </a>
    </nav>
  </header>
);
