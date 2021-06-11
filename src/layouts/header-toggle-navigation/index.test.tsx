/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { HeaderToggleNavigation } from ".";

test("links", () => {
  render(<HeaderToggleNavigation />);
  expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "GitHub" })).toBeInTheDocument();
});
