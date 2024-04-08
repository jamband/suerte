export type _Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: (ratio: `${number}x${number}`) => boolean;
  text: string;
  aspectRatio: string;
};
