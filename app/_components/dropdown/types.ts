export type Props = {
  className?: string;
  label?: string;
  children: React.ReactNode;
};

export type _Props = Props & {
  containerRef: React.RefObject<HTMLDetailsElement | null>;
  onBlur: (event: React.FocusEvent) => void;
  onClick: (event: React.MouseEvent) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  contentRef: React.RefObject<HTMLDivElement | null>;
  onClickCapture: (event: React.MouseEvent) => void;
};
