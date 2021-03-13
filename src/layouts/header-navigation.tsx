import Link from "next/link";

export const HeaderNavigation = () => {
  return (
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
          <a
            className="nav-link"
            href="https://github.com/jamband/quiet-nextz"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};
