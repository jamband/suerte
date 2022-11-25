import Link from "next/link";
import { Button } from "~/components/button";
import { CloseButton } from "~/components/close-button";
import { useOffcanvas } from "~/hooks/offcanvas";
import { Layout } from "~/layouts/layout";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
  useOffcanvas();

  const links = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
    { href: "/about", text: "About" },
  ];

  return (
    <>
      <h1>Offcanvas</h1>
      <Button
        type="button"
        className="btn-primary"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Go to pages
      </Button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasExampleLabel" className="offcanvas-title">
            Pages
          </h5>
          <CloseButton className="text-reset" dismiss="offcanvas" />
        </div>
        <div className="list-group list-group-flush">
          {links.map((link) => (
            <div key={link.href} data-bs-dismiss="offcanvas">
              <Link
                href={link.href}
                className="list-group-item list-group-item-action text-primary"
              >
                {link.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Page.getLayout = (page) => <Layout title="Offcanvas">{page}</Layout>;

export default Page;
