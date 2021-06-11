/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { LinkExternal } from ".";

test("minimal", () => {
  render(<LinkExternal href="https://example.com">foo</LinkExternal>);

  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
  expect(link).toHaveTextContent("foo");
  expect(link).toHaveAttribute("rel", "noopener noreferrer");
  expect(link).toHaveAttribute("target", "_blank");
});

test("rel: author", () => {
  render(
    <LinkExternal href="https://example.com" rel="author">
      foo
    </LinkExternal>
  );

  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
  expect(link).toHaveTextContent("foo");
  expect(link).toHaveAttribute("rel", "noopener noreferrer author");
  expect(link).toHaveAttribute("target", "_blank");
});
