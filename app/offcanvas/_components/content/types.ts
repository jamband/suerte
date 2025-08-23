import type { useDialog } from "@/_hooks/dialog";
import type { Route } from "next";

export type Link = {
  href: Route;
  text: string;
};

export type _Props = {
  offcanvas: ReturnType<typeof useDialog>;
  pushAfterCloseOffcanvas: (href: Link["href"]) => void;
  links: Array<Link>;
  moreLinks: Array<Link>;
};
