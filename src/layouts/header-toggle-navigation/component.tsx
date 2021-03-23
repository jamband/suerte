import Link from "next/link";
import { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbar"
      aria-controls="collapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      ref={props.collapseRef}
      className="collapse navbar-collapse"
      id="navbar"
    >
      <ul onClick={props.collapsed} className="d-md-none navbar-nav">
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
  </>
);
