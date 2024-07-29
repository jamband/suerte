import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from ".";
import { Gap } from "../gap";
import styles from "./stories.module.css";

const meta = {
  component: Progress,
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default = {
  render: () => (
    <Gap flow="column" gap="1rem">
      <Progress
        className={styles.container}
        min={0}
        max={100}
        now={10}
        text="in progress"
      />
      <Progress
        className={styles.container}
        min={0}
        max={100}
        now={50}
        text="in progress"
      />
      <Progress
        className={styles.container}
        min={0}
        max={100}
        now={100}
        text="completed"
      />
    </Gap>
  ),
} satisfies Story;
