export type Props = {
  className?: string;
  color: `#${string}`;
  text: string;
  dataBsToggle: string;
  dataBsTarget: `#${string}`;
  onClick: () => void;
  disabled: boolean;
};

export type _Props = Props;
