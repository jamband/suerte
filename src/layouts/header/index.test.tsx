/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { Header } from ".";
import { APP_NAME } from "../../constants/app";

test("links", () => {
  render(<Header />);
  expect(screen.getByRole("link", { name: APP_NAME })).toBeInTheDocument();
});
