import { IconChevronRight } from "@/icons/chevron-right";
import { Layout } from "@/layouts/layout";
import Link from "next/link";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
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
                <Link href={link.href} className="text-decoration-none">
                  {link.text}
                  <IconChevronRight
                    style={{
                      marginLeft: "0.6rem",
                      height: "0.5em",
                      width: "0.5em",
                      verticalAlign: "0.1em",
                    }}
                  />
                </Link>
              </h2>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

Page.getLayout = (page) => <Layout title="">{page}</Layout>;

export default Page;
