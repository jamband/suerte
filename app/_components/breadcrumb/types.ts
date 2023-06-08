export type Props = {
  text: string;
};

export type _Props = {
  items: { pathname: string; text: string }[];
  isCurrent: (pathname: string) => boolean;
};
