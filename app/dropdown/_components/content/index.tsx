"use client";

import { useEffect, useState } from "react";
import { Component } from "./component";

const generateLetters = () => {
  return [...Array(10)].map(() => {
    return ["A", "B", "C"][Math.floor(Math.random() * Math.floor(3))];
  });
};

export const Content: React.FC = () => {
  const [letters, setLetters] = useState("GENERATING".split(""));
  const [searchLetter, setSearchLetter] = useState("");

  const reset = () => {
    setSearchLetter("");
    setLetters(generateLetters());
  };

  useEffect(() => {
    setTimeout(() => {
      setLetters(generateLetters());
    }, 1000);
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
