export type Props = {
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
};

export type _Props = Props & {
  pending: boolean;
};
