import type { Props as TooltipProps } from "@/_components/tooltip/types";

export type Placement = TooltipProps["placement"];

export type _Props = {
  placement: Placement;
  handlePlacement: (event: React.MouseEvent) => void;
  permanent: boolean;
  togglePermanent: () => void;
};
