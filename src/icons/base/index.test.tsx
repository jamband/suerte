import { render, screen } from "@testing-library/react";
import { Icon } from ".";

test("", () => {
  render(
    <Icon
      style={{ height: "1em", width: "1em", verticalAlign: "-0.125em" }}
      viewBox="0 0 16 16"
    >
      icon
    </Icon>
  );

  const imageElement = screen.getByText("icon");
  expect(imageElement).toHaveAttribute("viewBox", "0 0 16 16");
  expect(imageElement).toHaveClass("inline-block ", { exact: true });
  expect(imageElement).toHaveStyle(
    "height: 1em; width: 1em; vertical-align: -0.125em;"
  );
  expect(imageElement).not.toHaveAccessibleName("img");
  expect(imageElement).toHaveAttribute("role", "img");
  expect(imageElement).toHaveAttribute("aria-hidden", "true");
});
