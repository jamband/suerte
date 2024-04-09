import type { useDialog } from "@/_hooks/dialog";

type Dialog = ReturnType<typeof useDialog>;

export type Links = Array<{
  href: string;
  text: string;
}>;

export type _Props = {
  offcanvasRef: Dialog["ref"];
  showOffcanvs: Dialog["show"];
  closeOffcanvas: Dialog["close"];
  closeOffcanvasOnBackgroundClick: Dialog["closeOnBackgroundClick"];
  closeOffcanvasOnEscapeKeyDown: Dialog["closeOnEscapeKeyDown"];
  pushAfterCloseOffcanvas: (href: string) => void;
  links: Links;
  moreLinks: Links;
};
