import Link from "next/link";
import { LinkExternal } from "~/components/link-external";

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
        <LinkExternal
          className="nav-link"
          href="https://github.com/jamband/quiet-nextz"
        >
          GitHub
        </LinkExternal>
      </li>
    </ul>
  </div>
);
