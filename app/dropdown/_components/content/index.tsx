"use client";

import { useEffect, useState } from "react";
import { Component } from "./component";
import type { Props } from "./types";

export const Content: React.FC<Props> = (props) => {
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
    <Component
      {...props}
      characters={characters}
      search={search}
      refresh={refresh}
      isMatchedCharacter={isMatchedCharacter}
    />
  );
};
