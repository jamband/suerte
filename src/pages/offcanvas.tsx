import Link from "next/link";
import { CloseButton } from "~/components/close-button";
import { useOffcanvas } from "~/hooks/offcanvas";
import { Page } from "~/layouts/page";

export default function View() {
  useOffcanvas();

  const links = [
    { pathname: "/", text: "Home" },
    { pathname: "/contact", text: "Contact" },
    { pathname: "/about", text: "About" },
  ];

  return (
    <Page title="Offcanvas">
      <h1>Offcanvas</h1>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Go to pages
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasExampleLabel">Pages</h5>
          <CloseButton className="text-reset" dismiss="offcanvas" />
        </div>
        <ul className="list-unstyled">
          {links.map((link) => (
            <li className="nav-item" key={link.pathname}>
              <Link href={link.pathname}>
                <a className="nav-link" data-bs-dismiss="offcanvas">
                  {link.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Page>
  );
}
