import Link from "next/link";
import styles from "./style.module.css";

export const Component: React.FC = () => (
  <footer className={styles.container}>
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
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </nav>
  </footer>
);
