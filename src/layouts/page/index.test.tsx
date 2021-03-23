import { render, screen } from "@testing-library/react";
import { APP_NAME } from "~/constants/app";
import { Page } from ".";

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: function Head({ children }: { children: React.ReactNode }) {
      return <>{children}</>;
    },
  };
});

test("top page", async () => {
  render(
    <Page title="">
      <h1>Home</h1>
    </Page>
  );
  expect(document.title).toBe(APP_NAME);
  expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
});

test("foo page", async () => {
  render(
    <Page title="Foo">
      <h1>Foo</h1>
    </Page>
  );
  expect(document.title).toBe(`Foo · ${APP_NAME}`);
  expect(screen.getByRole("heading", { name: "Foo" })).toBeInTheDocument();
});
