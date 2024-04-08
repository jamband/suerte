import type { useDialog } from "@/_hooks/dialog";

type Dialog = ReturnType<typeof useDialog>;

export type Links = Array<{
  href: string;
  text: string;
}>;

export type _Props = {
  offcanvasRef: Dialog["ref"];
  showOffcanvs: Dialog["show"];
  hideOffcanvas: Dialog["hide"];
  hideOffcanvasOnBackgroundClick: Dialog["hideOnBackgroundClick"];
  hideOffcanvasOnEscapeKeyDown: Dialog["hideOnEscapeKeyDown"];
  links: Links;
  moreLinks: Links;
};
