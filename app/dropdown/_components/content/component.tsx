import { Dropdown } from "../dropdown";
import { DropdownButtonLink } from "../dropdown-button-link";
import { DropdownDivider } from "../dropdown-divider";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <Dropdown
      id="dropdownSearchButton"
      label="Search"
      className="btn btn-primary"
    >
      <DropdownButtonLink onClick={props.refresh}>Refresh</DropdownButtonLink>
      <DropdownDivider />
      {["A", "B", "C"].map((character, index) => (
        <DropdownButtonLink key={index} onClick={() => props.search(character)}>
          {character}
        </DropdownButtonLink>
      ))}
    </Dropdown>
    <div className="mt-3 text-center">
      {props.characters.map((character, index) =>
        props.isMatchedCharacter(character) ? (
          <mark
            key={index}
            className="me-2 p-1 fw-bold font-monospace text-primary"
          >
            {character}
          </mark>
        ) : (
          <span key={index} className="me-2 p-1 fw-bold font-monospace">
            {character}
          </span>
        )
      )}
    </div>
  </>
);
