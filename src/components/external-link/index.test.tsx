/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { ExternalLink } from ".";

test("minimal", () => {
  render(<ExternalLink href="https://example.com">foo</ExternalLink>);

  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
  expect(link).toHaveTextContent("foo");
  expect(link).toHaveAttribute("rel", "noopener noreferrer");
  expect(link).toHaveAttribute("target", "_blank");
});

test("rel: author", () => {
  render(
    <ExternalLink href="https://example.com" rel="author">
      foo
    </ExternalLink>
  );

  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
  expect(link).toHaveTextContent("foo");
  expect(link).toHaveAttribute("rel", "noopener noreferrer author");
  expect(link).toHaveAttribute("target", "_blank");
});
