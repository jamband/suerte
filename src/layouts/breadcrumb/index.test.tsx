import { render, screen } from "@testing-library/react";
import { router } from "~/mocks/router";
import { Breadcrumb } from ".";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("top page", () => {
  router.mockReturnValue({
    pathname: "/",
  });

  render(<Breadcrumb text="" />);

  const listitem = screen.getByRole("listitem");
  expect(listitem).toBeInTheDocument();
  expect(listitem).toHaveClass("active");
  expect(listitem).toHaveTextContent("Home");
  expect(listitem).toHaveAttribute("aria-current", "page");
});

test("foo page", () => {
  router.mockReturnValue({
    pathname: "/foo",
  });

  render(<Breadcrumb text="Foo · Bar" />);

  const listitems = screen.getAllByRole("listitem");
  expect(listitems.length).toBe(2);

  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  expect(listitems[0]).not.toHaveClass("active");
  expect(listitems[0]).toHaveTextContent("Home");
  expect(listitems[0]).not.toHaveAttribute("aria-current");

  expect(listitems[1]).toHaveClass("active");
  expect(listitems[1]).toHaveTextContent("Foo");
  expect(listitems[1]).toHaveAttribute("aria-current", "page");
});
