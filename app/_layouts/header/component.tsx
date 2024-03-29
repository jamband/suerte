import { APP_NAME } from "@/_constants/app";
import Link from "next/link";

export const Component: React.FC = () => (
  <header className="fixed-top py-3 bg-light border-bottom border-dark">
    <div className="container text-center">
      <Link href="/" className="px-3 py-2 text-decoration-none">
        {APP_NAME}
      </Link>
    </div>
  </header>
);
