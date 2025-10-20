import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from ".";
import styles from "./stories.module.css";

const meta = {
  component: Tooltip,
  argTypes: {
    placement: {
      control: { type: "radio" },
      options: ["top", "right", "bottom", "left"],
    },
  },
  args: {
    placement: "top",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default = {
  render: (args) => (
    <div className={styles.container}>
      <Tooltip
        {...args}
        title={args.placement}
        buttonStyle={styles.button}
        tooltipStyle={styles.tooltip}
      >
        placement on
      </Tooltip>
    </div>
  ),
} satisfies Story;
