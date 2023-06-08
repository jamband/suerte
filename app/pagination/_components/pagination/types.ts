export type Props = {
  currentPage: number;
  pageCount: number;
};

export type _Props = Props & {
  itemClass: (part: Part) => string;
  href: (part: Part) => { pathname: string; query: { page: number } };
  linkClass: () => string;
  disabled: (part: Part) => boolean;
  blur: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export type Part = "first" | "previous" | "next" | "last";
