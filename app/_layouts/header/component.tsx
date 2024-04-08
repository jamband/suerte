import { APP_NAME } from "@/_constants/app";
import Link from "next/link";
import styles from "./styles.module.css";

export const Component: React.FC = () => (
  <header className={styles.container}>
    <nav className={styles.navigation} aria-label="header navigation">
      <Link href="/" className={styles.link}>
        {APP_NAME}
      </Link>
    </nav>
  </header>
);
