export type Props = {
  show: boolean;
  children: React.ReactNode;
  onTransitionEnd?: () => void;
};

export type _Props = Props & {
  containerRef: React.RefObject<HTMLDivElement>;
  mainRef: React.RefObject<HTMLDivElement>;
};
