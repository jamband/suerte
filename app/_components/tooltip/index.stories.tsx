import preview from "../../../.storybook/preview";
import { Tooltip } from ".";
import styles from "./stories.module.css";

const meta = preview.meta({
  component: Tooltip,
});

export const Top = meta.story({
  render: () => (
    <div className={styles.container}>
      <Tooltip
        placement="top"
        title="top"
        buttonStyle={styles.button}
        tooltipStyle={styles.tooltip}
      >
        placement on
      </Tooltip>
    </div>
  ),
});

export const Right = meta.story({
  render: () => (
    <div className={styles.container}>
      <Tooltip
        placement="right"
        title="right"
        buttonStyle={styles.button}
        tooltipStyle={styles.tooltip}
      >
        placement on
      </Tooltip>
    </div>
  ),
});

export const Bottom = meta.story({
  render: () => (
    <div className={styles.container}>
      <Tooltip
        placement="bottom"
        title="bottom"
        buttonStyle={styles.button}
        tooltipStyle={styles.tooltip}
      >
        placement on
      </Tooltip>
    </div>
  ),
});

export const Left = meta.story({
  render: () => (
    <div className={styles.container}>
      <Tooltip
        placement="left"
        title="left"
        buttonStyle={styles.button}
        tooltipStyle={styles.tooltip}
      >
        placement on
      </Tooltip>
    </div>
  ),
});
