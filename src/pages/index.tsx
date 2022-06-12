import Link from "next/link";
import { Page } from "../layouts/page";

export default function View() {
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
    <Page title="">
      <h1>Home</h1>
      <nav aria-label="Main navigation">
        <ul className="list-inline">
          {links.map((link) => (
            <li key={link.href} className="list-inline-item">
              <Link href={link.href}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Page>
  );
}
