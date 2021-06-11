/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { APP_NAME } from "~/constants/app";
import { Header } from ".";

test("links", () => {
  render(<Header />);
  expect(screen.getByRole("link", { name: APP_NAME })).toBeInTheDocument();
});
