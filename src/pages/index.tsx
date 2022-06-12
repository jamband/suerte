import Link from "next/link";
import { Layout } from "../layouts/layout";

export default function Page() {
  const links = [
    { href: "/alert", text: "Alert" },
    { href: "/collapse", text: "Collapse" },
    { href: "/dropdown", text: "Dropdown" },
    { href: "/form", text: "Form" },
    { href: "/modal", text: "Modal" },
    { href: "/offcanvas", text: "Offcanvas" },
    { href: "/pagination", text: "Pagination" },
    { href: "/progress", text: "Progress" },
    { href: "/ratio", text: "Ratio" },
    { href: "/toast", text: "Toast" },
  ];

  return (
    <>
      <nav aria-label="Main navigation">
        <ul className="list-unstyled">
          {links.map((link) => (
            <li key={link.href} className="mb-3">
              <h2>
                <Link href={link.href}>{link.text}</Link>
              </h2>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => <Layout title="">{page}</Layout>;
