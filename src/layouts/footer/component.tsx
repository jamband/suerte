import Link from "next/link";
import styles from "./style.module.scss";

export const Component: React.FC = () => (
  <footer className="fixed-bottom py-3 text-center bg-light border-top border-dark">
    <nav className={styles.contents} aria-label="Footer navigation">
      <ul className="list-inline m-0">
        <li className="list-inline-item">
          <Link href="/about" className="px-3 py-2 text-decoration-none">
            About
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="/contact" className="px-3 py-2 text-decoration-none">
            Contact
          </Link>
        </li>
        <li className="list-inline-item">
          <a
            href="https://github.com/jamband/suerte"
            className="px-3 py-2 text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  </footer>
);
