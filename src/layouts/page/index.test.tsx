import { render, screen } from "@testing-library/react";
import { APP_NAME } from "~/constants/app";
import { Page } from ".";
import { useRouter } from "next/router";

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: function Head({ children }: { children: React.ReactNode }) {
      return <>{children}</>;
    },
  };
});

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

test("top page", () => {
  (useRouter as jest.Mock).mockImplementation(() => ({
    pathname: "/",
  }));

  render(
    <Page title="">
      <h1>Home</h1>
    </Page>
  );

  expect(screen.getByRole("navigation", { name: "breadcrumb" }));
  expect(document.title).toBe(APP_NAME);
  expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
});

test("foo page", () => {
  (useRouter as jest.Mock).mockImplementation(() => ({
    pathname: "/foo",
  }));

  render(
    <Page title="Foo">
      <h1>Foo</h1>
    </Page>
  );

  expect(screen.getByRole("navigation", { name: "breadcrumb" }));
  expect(document.title).toBe(`Foo · ${APP_NAME}`);
  expect(screen.getByRole("heading", { name: "Foo" })).toBeInTheDocument();
});
