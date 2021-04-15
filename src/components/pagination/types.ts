export type Props = {
  currentPage: number;
  pageCount: number;
};

export type _Props = Props & {
  hasTouchScreen: boolean;
  pageLink: (page: number) => { pathname: string; query: { page: number } };
  disabled: (part: Part) => boolean;
  disabledSelector: (part: Part) => "disabled" | "";
};

export type Part = "first" | "previous" | "next" | "last";
