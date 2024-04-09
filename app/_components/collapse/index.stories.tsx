import type { Meta, StoryObj } from "@storybook/react";
import { Collapse } from ".";
import { Alert } from "../alert";
import styles from "./stories.module.css";

const meta = {
  component: Collapse,
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Default = {
  decorators: [
    (Story) => (
      <>
        <Alert className={styles.alert}>foo</Alert>
        <Story />
        <Alert className={styles.alert}>baz</Alert>
      </>
    ),
  ],
  args: {
    show: true,
    children: <Alert className={styles.alert}>bar</Alert>,
  },
} satisfies Story;
