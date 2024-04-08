export type Props = {
  type?: "info" | "success" | "warning" | "danger";
  dismissible?: boolean;
  className?: string;
  children: React.ReactNode;
};

export type _Props = Props & {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
