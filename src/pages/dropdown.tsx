import { useEffect, useState } from "react";
import { Dropdown } from "../components/dropdown";
import { DropdownButtonLink } from "../components/dropdown-button-link";
import { DropdownDivider } from "../components/dropdown-divider";
import { Page } from "../layouts/page";

export default function View() {
  const [characters, setCharacters] = useState([""]);
  const [isMatched, setIsMatched] = useState(false);
  const [searchCharacter, setSearchCharacter] = useState("");

  const generateCharacters = () => {
    return [...Array(10)].map(() => {
      return ["A", "B", "C"][Math.floor(Math.random() * Math.floor(3))];
    });
  };

  const search = (character: string) => {
    setIsMatched(true);
    setSearchCharacter(character);
  };

  const refresh = () => {
    setIsMatched(false);
    setCharacters(generateCharacters());
  };

  const isMatchedCharacter = (character: string) => {
    return isMatched && character === searchCharacter;
  };

  useEffect(() => {
    setCharacters(generateCharacters());
  }, []);

  return (
    <Page title="Dropdown">
      <h1>Dropdown</h1>
      <Dropdown id="dropdownSearchButton" label="Search">
        <DropdownButtonLink onClick={refresh}>Refresh</DropdownButtonLink>
        <DropdownDivider />
        {["A", "B", "C"].map((character, index) => (
          <DropdownButtonLink key={index} onClick={() => search(character)}>
            {character}
          </DropdownButtonLink>
        ))}
      </Dropdown>
      <div className="mt-3 text-center">
        {characters.map((character, index) =>
          isMatchedCharacter(character) ? (
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
    </Page>
  );
}
