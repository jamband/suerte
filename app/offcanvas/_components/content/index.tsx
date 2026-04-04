"use client";

import { useDialog } from "@/_hooks/dialog";
import { useRouter } from "next/navigation";
import { Component } from "./component";
import type { Link } from "./types";

export const Content: React.FC = () => {
  const offcanvas = useDialog();
  const router = useRouter();

  const links: Array<Link> = [
    { href: "/", text: "Home" },
    { href: "/alert", text: "Alert" },
    { href: "/collapse", text: "Collapse" },
    { href: "/dropdown", text: "Dropdown" },
    { href: "/form", text: "Form" },
    { href: "/footer-menu", text: "Footer Menu" },
    { href: "/modal", text: "Modal" },
    { href: "/offcanvas", text: "Offcanvas" },
    { href: "/pagination", text: "Pagination" },
    { href: "/progress", text: "Progress" },
    { href: "/ratio", text: "Ratio" },
    { href: "/tabs", text: "Tabs" },
    { href: "/toast", text: "Toast" },
    { href: "/tooltip", text: "Tooltip" },
  ];

  const moreLinks: Array<Link> = [
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];

  const pushAfterCloseOffcanvas = (href: Link["href"]) => {
    offcanvas.close();

    setTimeout(() => {
      router.push(href);
    }, 100);
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
