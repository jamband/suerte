/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { Footer } from ".";

test("text", () => {
  render(<Footer />);
  expect(screen.getByText("About")).toHaveAttribute("href", "/about");
  expect(screen.getByText("Contact")).toHaveAttribute("href", "/contact");
  expect(screen.getByText("GitHub")).toHaveAttribute(
    "href",
    "https://github.com/jamband/suerte"
  );
});
