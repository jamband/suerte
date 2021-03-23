import { render, screen } from "@testing-library/react";
import { APP_NAME } from "~/constants/app";
import { Footer } from ".";

test("text", () => {
  render(<Footer />);
  expect(screen.getByText(APP_NAME)).toBeInTheDocument();
});
