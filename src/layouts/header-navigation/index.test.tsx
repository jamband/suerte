/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { HeaderNavigation } from ".";

test("links", () => {
  render(<HeaderNavigation />);
  expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "GitHub" })).toBeInTheDocument();
});
