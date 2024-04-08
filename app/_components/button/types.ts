export type Props = {
  className?: string;
  type?: "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export type _Props = Props;
