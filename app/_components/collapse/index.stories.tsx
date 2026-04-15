import preview from "../../../.storybook/preview";
import { Alert } from "../alert";
import { Collapse } from ".";
import styles from "./stories.module.css";

const meta = preview.meta({
  component: Collapse,
});

export const Default = meta.story({
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
});
