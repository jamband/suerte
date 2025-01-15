import type { useDialog } from "@/_hooks/dialog";

export type Links = Array<{
  href: string;
  text: string;
}>;

export type _Props = {
  offcanvas: ReturnType<typeof useDialog>;
  pushAfterCloseOffcanvas: (href: string) => void;
  links: Links;
  moreLinks: Links;
};
