"use client";

import { Component } from "./component";

export const Content: React.FC = () => {
  const reload = () => {
    location.reload();
  };

  return <Component reload={reload} />;
};
