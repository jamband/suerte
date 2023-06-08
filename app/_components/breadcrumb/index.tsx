"use client";

import { usePathname } from "next/navigation";
import { Component } from "./component";
import type { Props } from "./types";

export const Breadcrumb: React.FC<Props> = (props) => {
  const pathname = usePathname();

  const items = () => {
    const links = [{ pathname: "/", text: "Home" }];

    if (props.text === "") {
      return links;
    }

    links.push({ pathname, text: props.text });
    return links;
  };

  const isCurrent = (current: string) => {
    return pathname === current;
  };

  return <Component items={items()} isCurrent={isCurrent} />;
};
