import Link from "next/link";
import { Breadcrumb } from "./_components/breadcrumb";
import styles from "./page.module.css";

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
      <Breadcrumb text="" />
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li key={index} className={styles.item}>
            <Link href={link.href} className={styles.link}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
