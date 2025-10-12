import { IconArrowUpRightFromSquare } from "@/_icons/arrow-up-right-from-square";
import Link from "next/link";
import styles from "./style.module.css";

export const Component: React.FC = () => (
  <footer className={styles.container}>
    <div className={styles.containerInner}>
      <nav className={styles.navigation} aria-label="footer navigation">
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <a
          href="https://github.com/jamband/suerte"
          className={styles.link}
          rel="noreferrer"
          target="_blank"
        >
          GitHub
          <IconArrowUpRightFromSquare className={styles.linkIcon} />
        </a>
      </nav>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Tomoki Morita
      </div>
    </div>
  </footer>
);
