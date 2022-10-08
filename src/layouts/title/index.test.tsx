import { render } from "@testing-library/react";
import { APP_NAME } from "~/constants/app";
import { Title } from ".";

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: function Head({ children }: { children: React.ReactNode }) {
      return <>{children}</>;
    },
  };
});

test("top page", () => {
  render(<Title title="" />);

  expect(document.title).toBe(APP_NAME);
});

test("foo page", () => {
  render(<Title title="Foo" />);

  expect(document.title).toBe(`Foo · ${APP_NAME}`);
});
