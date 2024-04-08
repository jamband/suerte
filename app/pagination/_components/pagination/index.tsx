"use client";

import { useSearchParams } from "next/navigation";
import { Component } from "./component";

export const Pagination: React.FC = () => {
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page") || "1");
  const lastPage = 10;

  const match = (index: number) => {
    return currentPage === index + 1;
  };

  const isValidCurrentPage = currentPage >= 1 && currentPage <= 10;

  return (
    <Component
      isValidCurrentPage={isValidCurrentPage}
      currentPage={currentPage}
      lastPage={lastPage}
      match={match}
    />
  );
};
