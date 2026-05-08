import type { useDialog } from "@/_hooks/dialog";

export type _Props = {
  page: number;
  pages: Array<Array<string>>;
  switchPage: (page: number) => void;
  menu: ReturnType<typeof useDialog>;
  contentHeaderRef: React.RefObject<HTMLHeadingElement | null>;
};
