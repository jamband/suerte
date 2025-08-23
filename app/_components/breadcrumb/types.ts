import type { Route } from "next";

export type Link = {
  href: Route;
  text: string;
};

export type Props = {
  text: Link["text"];
};

export type _Props = {
  links: Array<Link>;
  isCurrent: (href: Link["href"]) => boolean;
};
