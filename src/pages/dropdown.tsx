import { useEffect, useState } from "react";
import { useDropdown } from "~/hooks/dropdown";
import { IconChevronDown } from "~/icons/chevron-down";
import { Page } from "~/layouts/page";

const View: React.VFC = () => {
  useDropdown();

  const [characters, setCharacters] = useState([""]);
  const [isMatched, setIsMatched] = useState(false);
  const [searchCharacter, setSearchCharacter] = useState("");

  const generateCharacters = () => {
    return [...Array(15)].map(() => {
      return ["a", "b", "c"][Math.floor(Math.random() * Math.floor(3))];
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
      <div className="dropdown">
        <button
          id="dropdownSearchButton"
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="pe-1">Search</span>
          <IconChevronDown className="w-3 h-3" />
        </button>
        <ul
          className="dropdown-menu shadow-sm bg-light"
          aria-labelledby="dropdownSearchButton"
        >
          <li>
            <button
              type="button"
              className="btn btn-link dropdown-item"
              onClick={refresh}
            >
              Refresh
            </button>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          {["a", "b", "c"].map((character, index) => (
            <li key={index}>
              <button
                type="button"
                className="btn btn-link dropdown-item"
                onClick={() => search(character)}
              >
                {character}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3 text-center">
        {characters.map((character, index) => (
          <span
            key={index}
            className={`me-2 ${isMatchedCharacter(character) ? "mark" : null}`}
          >
            {character}
          </span>
        ))}
      </div>
    </Page>
  );
};

export default View;
