export type Props = {
  //
};

export type _Props = Props & {
  ratioList: Array<string>;
  handleRatioSelector: (ratio: string) => void;
  ratioSelector: string;
};
