import Link from "next/link";
import { HeaderNavigation } from "~/layouts/header-navigation";
import { HeaderToggleNavigation } from "~/layouts/header-toggle-navigation";
import type { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <header>
    <nav className="fixed-top navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">{props.appName}</a>
        </Link>
        <HeaderToggleNavigation />
        <HeaderNavigation />
      </div>
    </nav>
  </header>
);
