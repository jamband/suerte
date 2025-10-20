export type Props = {
  placement: "top" | "right" | "bottom" | "left";
  buttonStyle: string;
  children: React.ReactNode;
  tooltipStyle: string;
  title: string;
  onClick?: () => void;
  disabled?: boolean;
};

export type _Props = Props & {
  id: string;
};
