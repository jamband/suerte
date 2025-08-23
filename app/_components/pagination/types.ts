import type { Route } from "next";

export type Part = "First" | "Previous" | "Next" | "Last";

export type Props = {
  className?: string;
  pathname: Route;
  currentPage: number;
  lastPage: number;
};

export type _Props = Props & {
  parts: Array<Part>;
  disabled: (part: Part) => boolean;
  symbol: (part: Part) => "←" | "→";
  href: (part: Part) => Route;
};
