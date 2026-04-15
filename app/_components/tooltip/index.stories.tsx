import preview from "../../../.storybook/preview";
import { Tooltip } from ".";
import styles from "./stories.module.css";

const meta = preview.meta({
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  args: {
    buttonStyle: styles.button,
    tooltipStyle: styles.tooltip,
    children: "placement on",
  },
});

export const Top = meta.story({
  args: {
    placement: "top",
    title: "top",
  },
});

export const Right = meta.story({
  args: {
    placement: "right",
    title: "right",
  },
});

export const Bottom = meta.story({
  args: {
    placement: "bottom",
    title: "bottom",
  },
});

export const Left = meta.story({
  args: {
    placement: "left",
    title: "left",
  },
});
