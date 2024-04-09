"use client";

import { useDialog } from "@/_hooks/dialog";
import { useRouter } from "next/navigation";
import { Component } from "./component";
import styles from "./styles.module.css";
import type { Links } from "./types";

export const Content: React.FC = () => {
  const dialog = useDialog(styles.transition);
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
    { href: "/toast", text: "Toast" },
  ];

  const moreLinks: Links = [
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];

  const pushAfterHideOffcanvas = (href: string) => {
    dialog.hide();
    const offcanvas = dialog.ref.current;

    offcanvas?.addEventListener(
      "transitionend",
      () => {
        router.push(href);
      },
      { once: true },
    );
  };

  return (
    <Component
      offcanvasRef={dialog.ref}
      showOffcanvs={dialog.show}
      hideOffcanvas={dialog.hide}
      hideOffcanvasOnBackgroundClick={dialog.hideOnBackgroundClick}
      hideOffcanvasOnEscapeKeyDown={dialog.hideOnEscapeKeyDown}
      pushAfterHideOffcanvas={pushAfterHideOffcanvas}
      links={links}
      moreLinks={moreLinks}
    />
  );
};
