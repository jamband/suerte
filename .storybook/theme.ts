import { create } from "@storybook/theming/create";
import { APP_NAME } from "../app/_constants/app";

export default create({
  base: "light",
  brandTitle: `${APP_NAME} Storybook`,
});
