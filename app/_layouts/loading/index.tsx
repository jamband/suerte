"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Component } from "./component";
import styles from "./style.module.css";
import type { State } from "./types";

export const Loading: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [state, setState] = useState<State>("initial");

  let className = styles.initial;

  if (state === "start") {
    className += ` ${styles.start}`;
  }

  if (state === "complete") {
    className += ` ${styles.complete}`;
  }

  useEffect(() => {
    setState("start");

    setTimeout(() => {
      setState("complete");
    }, 300);

    setTimeout(() => {
      setState("initial");
    }, 600);
  }, [pathname, searchParams]);

  return <Component className={className} />;
};
