import { useRouter } from "next/router";
import { Component } from "./component";
import type { Props } from "./types";

export const Breadcrumb: React.FC<Props> = (props) => {
  const router = useRouter();

  const items = () => {
    const links = [{ pathname: "/", text: "Home" }];

    if (props.text === "") {
      return links;
    }

    links.push({ pathname: router.pathname, text: props.text });
    return links;
  };

  const isCurrent = (pathname: string) => {
    return router.pathname === pathname;
  };

  return <Component items={items()} isCurrent={isCurrent} />;
};
