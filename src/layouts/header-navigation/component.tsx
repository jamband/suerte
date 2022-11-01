import Link from "next/link";
import { ExternalLink } from "~/components/external-link";

export const Component = () => (
  <div className="d-none d-md-block">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <Link href="/contact" className="nav-link">
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/about" className="nav-link">
          About
        </Link>
      </li>
      <li className="nav-item">
        <ExternalLink
          className="nav-link"
          href="https://github.com/jamband/suerte"
        >
          GitHub
        </ExternalLink>
      </li>
    </ul>
  </div>
);
