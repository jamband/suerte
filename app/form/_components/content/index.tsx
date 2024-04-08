"use client";

import { useEffect, useState } from "react";
import { Component } from "./component";
import type { InputState } from "./types";

export const Content: React.FC = () => {
  const [code, setCode] = useState("...");
  const [feedback, setFeedback] = useState("");
  const [input, setInput] = useState("");
  const [inputState, setInputState] = useState<InputState>(undefined);

  const generateCode = () => {
    return [...Array(6)]
      .map(() => {
        return Math.floor(Math.random() * Math.floor(10)).toString();
      })
      .join("");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const action = (formData: FormData) => {
    setInput(formData.get("code")?.toString() || "");

    if (input === code) {
      setFeedback("Looks good!");
      setInputState("valid");
    } else {
      setFeedback("Incorrect code.");
      setInputState("invalid");
    }
  };

  const reset = () => {
    setCode(generateCode());
    setInput("");
    setInputState(undefined);
    setFeedback("");
  };

  useEffect(() => {
    setCode(generateCode());
  }, []);

  return (
    <Component
      action={action}
      code={code}
      input={input}
      inputState={inputState}
      onChange={onChange}
      feedback={feedback}
      reset={reset}
    />
  );
};
