"use client";

import { useEffect, useState } from "react";
import { Component } from "./component";

export const Content: React.FC = () => {
  const [letters, setLetters] = useState("GENERATING".split(""));
  const [searchLetter, setSearchLetter] = useState("");

  const generateLetters = () => {
    return [...Array(10)].map(() => {
      return ["A", "B", "C"][Math.floor(Math.random() * Math.floor(3))];
    });
  };

  const reset = () => {
    setSearchLetter("");
    setLetters(generateLetters());
  };

  useEffect(() => {
    setLetters(generateLetters());
  }, []);

  return (
    <Component
      reset={reset}
      setSearchLetter={setSearchLetter}
      letters={letters}
      searchLetter={searchLetter}
    />
  );
};
