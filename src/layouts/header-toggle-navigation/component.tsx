import Link from "next/link";
import { Button } from "~/components/button";
import { LinkExternal } from "~/components/link-external";
import type { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <>
    <Button
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbar"
      aria-controls="collapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </Button>
    <div
      ref={props.collapseRef}
      className="collapse navbar-collapse"
      id="navbar"
    >
      <ul
        onClick={props.collapsed}
        className="d-md-none navbar-nav"
        role="presentation"
      >
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
            href="https://github.com/jamband/suerte"
          >
            GitHub
          </LinkExternal>
        </li>
      </ul>
    </div>
  </>
);
