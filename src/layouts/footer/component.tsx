import Link from "next/link";
import { LinkExternal } from "~/components/link-external";

export const Component: React.VFC = () => (
  <footer className="fixed-bottom py-3 text-center bg-light">
    <nav aria-label="Footer navigation">
      <ul className="list-inline m-0">
        <li className="list-inline-item">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li className="list-inline-item">
          <LinkExternal href="https://github.com/jamband/suerte">
            GitHub
          </LinkExternal>
        </li>
      </ul>
    </nav>
  </footer>
);
