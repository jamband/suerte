import Link from "next/link";
import { APP_NAME } from "../../constants/app";

export const Component: React.FC = () => (
  <header className="fixed-top py-3 bg-light">
    <div className="container text-center">
      <Link href="/" className="px-3 py-2 text-decoration-none">
        {APP_NAME}
      </Link>
    </div>
  </header>
);
