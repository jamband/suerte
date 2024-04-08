export type _Props = {
  reset: () => void;
  setSearchLetter: React.Dispatch<React.SetStateAction<string>>;
  letters: Array<string>;
  searchLetter: string;
};
