import { Fragment } from "react/jsx-runtime";
import { Dropdown } from "@/_components/dropdown";
import { DropdownAction } from "@/_components/dropdown/action";
import { DropdownDivider } from "@/_components/dropdown/divider";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={styles.container}>
    <Dropdown label="Search" className={styles.dropdown}>
      <DropdownAction onClick={props.reset}>Reset</DropdownAction>
      <DropdownDivider />
      {["A", "B", "C"].map((letter) => (
        <DropdownAction
          key={letter}
          onClick={() => props.setSearchLetter(letter)}
        >
          {letter}
        </DropdownAction>
      ))}
    </Dropdown>
    <div className={styles.letters}>
      {props.letters.map((letter, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: letters array has no unique identifier
        <Fragment key={index}>
          {props.searchLetter === letter ? (
            <mark className={styles.marked}>{letter}</mark>
          ) : (
            <span className={styles.letter}>{letter}</span>
          )}
        </Fragment>
      ))}
    </div>
  </div>
);
