import Link from "next/link";
import { LinkExternal } from "../../components/link-external";

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
        <LinkExternal
          className="nav-link"
          href="https://github.com/jamband/suerte"
        >
          GitHub
        </LinkExternal>
      </li>
    </ul>
  </div>
);
