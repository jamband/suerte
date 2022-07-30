import Link from "next/link";
import { ExternalLink } from "../../components/external-link";

export const Component = () => (
  <div className="d-none d-md-block">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <Link href="/contact">
          <a className="nav-link">Contact</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/about">
          <a className="nav-link">About</a>
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
