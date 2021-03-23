import { useCollapsed } from "~/hooks/collapsed";
import { Component } from "./component";

export const HeaderToggleNavigation: React.VFC = () => {
  const { collapseRef, collapsed } = useCollapsed();

  return <Component collapseRef={collapseRef} collapsed={collapsed} />;
};
