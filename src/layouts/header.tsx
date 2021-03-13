import Link from "next/link";
import { APP_NAME } from "~/constants/app";
import { HeaderNavigation } from "./header-navigation";
import { HeaderToggleNavigation } from "./header-toggle-navigation";

export const Header: React.VFC = () => {
  return (
    <header>
      <nav className="fixed-top navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">{APP_NAME}</a>
          </Link>
          <HeaderToggleNavigation />
          <HeaderNavigation />
        </div>
      </nav>
    </header>
  );
};
