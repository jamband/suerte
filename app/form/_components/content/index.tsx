"use client";

import { useFocus } from "@/_hooks/focus";
import { useEffect, useState } from "react";
import { Component } from "./component";
import type { Props } from "./types";

export const Content: React.FC<Props> = (props) => {
  const { focusRef } = useFocus();

  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const generateCode = () => {
    return [...Array(6)]
      .map(() => {
        return Math.floor(Math.random() * Math.floor(10)).toString();
      })
      .join("");
  };

  const refreshCode = () => {
    setCode(generateCode());
    setInput("");
    setError("");
    setIsSubmit(false);
  };

  const submit = () => {
    if (input === "") {
      setError("Please enter the code.");
    } else if (input !== code) {
      setError("Incorrect code.");
    } else {
      setError("");
    }
    setIsSubmit(true);
  };

  useEffect(() => {
    setCode(generateCode());
  }, []);
  return (
    <Component
      {...props}
      code={code}
      input={input}
      setInput={setInput}
      focusRef={focusRef}
      error={error}
      isSubmit={isSubmit}
      refreshCode={refreshCode}
      submit={submit}
    />
  );
};
