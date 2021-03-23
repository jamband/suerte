import { Footer } from "~/layouts/footer";
import { Header } from "~/layouts/header";

export const Component: React.FC = (props) => (
  <div className="d-flex flex-column min-vh-100 py-7">
    <Header />
    <div className="container flex-grow-1">{props.children}</div>
    <Footer />
  </div>
);
