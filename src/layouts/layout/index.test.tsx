/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { Layout } from ".";

test("layouts", () => {
  render(
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  expect(screen.getByRole("navigation")).toBeInTheDocument();
});
