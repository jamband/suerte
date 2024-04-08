export type Props = {
  className?: string;
  label?: string;
  children: React.ReactNode;
};

export type _Props = Props & {
  id: string;
  onClick: (event: React.MouseEvent) => void;
  onBlur: (event: React.FocusEvent) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
};
