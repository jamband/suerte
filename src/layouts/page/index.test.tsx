/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { Page } from ".";
import { APP_NAME } from "../../constants/app";

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: function Head({ children }: { children: React.ReactNode }) {
      return <>{children}</>;
    },
  };
});

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const router = useRouter as jest.Mock;

beforeEach(() => {
  router.mockReset();
});

test("top page", () => {
  router.mockReturnValue({
    pathname: "/",
  });

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
  router.mockReturnValue({
    pathname: "/foo",
  });

  render(
    <Page title="Foo">
      <h1>Foo</h1>
    </Page>
  );

  expect(screen.getByRole("navigation", { name: "breadcrumb" }));
  expect(document.title).toBe(`Foo · ${APP_NAME}`);
  expect(screen.getByRole("heading", { name: "Foo" })).toBeInTheDocument();
});
