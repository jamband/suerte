import type { useCollapse } from "@/collapse/_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  collapse: ReturnType<typeof useCollapse>;
};
