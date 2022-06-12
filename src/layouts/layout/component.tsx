import { Footer } from "../footer";
import { Header } from "../header";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className="d-flex flex-column min-vh-100 py-7">
    <Header />
    <div className="container flex-grow-1">{props.children}</div>
    <Footer />
  </div>
);
