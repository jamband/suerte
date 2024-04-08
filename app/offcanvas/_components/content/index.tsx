"use client";

import { useDialog } from "@/_hooks/dialog";
import { Component } from "./component";
import styles from "./styles.module.css";
import type { Links } from "./types";

export const Content: React.FC = () => {
  const dialog = useDialog(styles.transition);

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
    { href: "/toast", text: "Toast" },
  ];

  const moreLinks: Links = [
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <Component
      offcanvasRef={dialog.ref}
      showOffcanvs={dialog.show}
      hideOffcanvas={dialog.hide}
      hideOffcanvasOnBackgroundClick={dialog.hideOnBackgroundClick}
      hideOffcanvasOnEscapeKeyDown={dialog.hideOnEscapeKeyDown}
      links={links}
      moreLinks={moreLinks}
    />
  );
};
