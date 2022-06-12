/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { Layout } from ".";

jest.mock("../loading", () => ({
  Loading: jest.fn(() => null),
}));

jest.mock("../../components/notification", () => ({
  Notification: jest.fn(() => null),
}));

jest.mock("../breadcrumb", () => ({
  Breadcrumb: jest.fn(() => null),
}));

test("layouts", () => {
  render(
    <Layout title="">
      <h1>Home</h1>
    </Layout>
  );
  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  expect(screen.getByRole("navigation")).toBeInTheDocument();
});
