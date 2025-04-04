"use client";

import { useDialog } from "@/_hooks/dialog";
import { useRouter } from "next/navigation";
import { Component } from "./component";
import styles from "./styles.module.css";
import type { Links } from "./types";

export const Content: React.FC = () => {
  const offcanvas = useDialog(styles.transition);
  const router = useRouter();

  const links: Links = [
    { href: "/", text: "Home" },
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

  const moreLinks: Links = [
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];

  const pushAfterCloseOffcanvas = (href: string) => {
    offcanvas.close();
    const _offcanvas = offcanvas.ref.current;

    _offcanvas?.addEventListener(
      "transitionend",
      () => {
        router.push(href);
      },
      { once: true },
    );
  };

  return (
    <Component
      offcanvas={offcanvas}
      pushAfterCloseOffcanvas={pushAfterCloseOffcanvas}
      links={links}
      moreLinks={moreLinks}
    />
  );
};
