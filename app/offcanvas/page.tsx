import { Breadcrumb } from "@/_components/breadcrumb";
import { CloseButton } from "@/_components/close-button";
import type { Metadata } from "next";
import Link from "next/link";
import { GoToButton } from "./_components/go-to-button";

export const metadata: Metadata = {
  title: "Offcanvas",
};

export default function Page() {
  const links = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
    { href: "/about", text: "About" },
  ];

  return (
    <>
      <Breadcrumb text="Offcanvas" />
      <h1>Offcanvas</h1>
      <GoToButton />
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
}
