import type { Route } from "next";
import Link from "next/link";
import { Breadcrumb } from "./_components/breadcrumb";
import { IconArrowRight } from "./_icons/arrow-right";
import styles from "./page.module.css";

export default function Page() {
  const links: Array<{ href: Route; text: string }> = [
    { href: "/alert", text: "Alert" },
    { href: "/collapse", text: "Collapse" },
    { href: "/dropdown", text: "Dropdown" },
    { href: "/form", text: "Form" },
    { href: "/modal", text: "Modal" },
    { href: "/offcanvas", text: "Offcanvas" },
    { href: "/pagination", text: "Pagination" },
    { href: "/progress", text: "Progress" },
    { href: "/ratio", text: "Ratio" },
    { href: "/tabs", text: "Tabs" },
    { href: "/toast", text: "Toast" },
  ];

  return (
    <>
      <Breadcrumb text="" />
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li key={index} className={styles.item}>
            <Link href={link.href} className={styles.link}>
              {link.text}
              <IconArrowRight className={styles.linkIcon} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
