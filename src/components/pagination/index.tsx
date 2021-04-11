import { useRouter } from "next/router";
import { useHasTouchScreen } from "~/hooks/screen";
import { Component } from "./component";
import { Props, Part } from "./types";

export const Pagination: React.VFC<Props> = (props) => {
  const router = useRouter();
  const { hasTouchScreen } = useHasTouchScreen();

  const pageLink = (page: number) => {
    return {
      pathname: router.pathname,
      query: { ...router.query, page },
    };
  };

  const disabled = (part: Part) => {
    return ["first", "previous"].includes(part)
      ? props.currentPage < 2
      : props.currentPage >= props.pageCount;
  };

  const disabledSelector = (part: Part) => {
    return disabled(part) ? "disabled" : "";
  };

  return (
    <Component
      {...props}
      pageLink={pageLink}
      hasTouchScreen={hasTouchScreen}
      disabled={disabled}
      disabledSelector={disabledSelector}
    />
  );
};
