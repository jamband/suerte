import Link from "next/link";
import { APP_NAME } from "~/constants/app";
import { HeaderNavigation } from "~/layouts/header-navigation";
import { HeaderToggleNavigation } from "~/layouts/header-toggle-navigation";

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
