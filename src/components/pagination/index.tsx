import { useRouter } from "next/router";
import { useHasTouchScreen } from "~/hooks/screen";
import { Component } from "./component";
import type { Props, Part } from "./types";
import styles from "./style.module.scss";

export const Pagination: React.VFC<Props> = (props) => {
  const router = useRouter();
  const { hasTouchScreen } = useHasTouchScreen();

  const disabled = (part: Part) => {
    return ["first", "previous"].includes(part)
      ? props.currentPage < 2
      : props.currentPage >= props.pageCount;
  };

  const itemClass = (part: Part) => {
    let selector = "page-item w-25";
    if (disabled(part)) {
      selector += " disabled";
    }
    return selector;
  };

  const href = (part: Part) => {
    let page = 1;
    if (part === "previous") {
      page = props.currentPage - 1;
    } else if (part === "next") {
      page = props.currentPage + 1;
    } else if (part === "last") {
      page = props.pageCount;
    }
    return {
      pathname: router.pathname,
      query: { page },
    };
  };

  const linkClass = () => {
    let selector = "page-link";
    if (!hasTouchScreen) {
      selector += ` ${styles.clickable}`;
    }
    return selector;
  };

  const blur = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.blur();
  };

  return (
    <Component
      {...props}
      itemClass={itemClass}
      href={href}
      linkClass={linkClass}
      disabled={disabled}
      blur={blur}
    />
  );
};
