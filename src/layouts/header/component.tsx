import Link from "next/link";
import { APP_NAME } from "~/constants/app";

export const Component: React.VFC = () => (
  <header className="fixed-top py-3 bg-light">
    <div className="container text-center">
      <Link href="/">
        <a className="px-3 py-2 text-decoration-none">{APP_NAME}</a>
      </Link>
    </div>
  </header>
);
