export type Part = "First" | "Previous" | "Next" | "Last";

export type Props = {
  className?: string;
  pathname: `/${string}`;
  currentPage: number;
  lastPage: number;
};

export type _Props = Props & {
  parts: Array<Part>;
  disabled: (part: Part) => boolean;
  symbol: (part: Part) => "←" | "→";
  href: (part: Part) => string;
};
