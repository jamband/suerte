import { useRouter } from "next/router";
import { Component } from "./component";
import type { Props } from "./types";

export const Breadcrumb: React.VFC<Props> = (props) => {
  const router = useRouter();

  const items = () => {
    const text = props.text.substring(0, props.text.indexOf("·")).trim();
    const links = [{ pathname: "/", text: "Home" }];

    if (text === "") {
      return links;
    }

    links.push({ pathname: router.pathname, text });
    return links;
  };

  const isCurrent = (pathname: string) => {
    return router.pathname === pathname;
  };

  return <Component items={items()} isCurrent={isCurrent} />;
};
