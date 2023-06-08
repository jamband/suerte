export type Props = {
  //
};

export type _Props = Props & {
  characters: Array<string>;
  search: (character: string) => void;
  refresh: () => void;
  isMatchedCharacter: (character: string) => boolean;
};
