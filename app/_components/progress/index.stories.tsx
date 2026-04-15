import preview from "../../../.storybook/preview";
import { Progress } from ".";
import styles from "./stories.module.css";

const meta = preview.meta({
  component: Progress,
  args: {
    min: 0,
    max: 100,
    text: "in progress",
    className: styles.container,
  },
});

export const Ten = meta.story({
  args: {
    now: 10,
  },
});

export const Fifty = meta.story({
  args: {
    now: 50,
  },
});

export const OneHundred = meta.story({
  args: {
    now: 100,
  },
});
