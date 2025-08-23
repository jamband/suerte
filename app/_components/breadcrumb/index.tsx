"use client";

import { usePathname } from "next/navigation";
import { Component } from "./component";
import type { Link, Props } from "./types";

export const Breadcrumb: React.FC<Props> = (props) => {
  const pathname = usePathname();

  const links = () => {
    const items: Array<Link> = [{ href: "/", text: "Home" }];
    if (props.text === "") return items;

    items.push({ href: pathname as Link["href"], text: props.text });
    return items;
  };

  const isCurrent = (current: Link["href"]) => {
    return pathname === current;
  };

  return <Component links={links()} isCurrent={isCurrent} />;
};
