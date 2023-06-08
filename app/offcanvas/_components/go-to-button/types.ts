import type { useOffcanvas } from "@/offcanvas/_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  offcanvas: ReturnType<typeof useOffcanvas>;
};
