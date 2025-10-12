import { Gap } from "@/_components/gap";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from ".";
import { IconAngleDown } from "../angle-down";
import { IconArrowRight } from "../arrow-right";
import { IconArrowUpRightFromSquare } from "../arrow-up-right-from-square";
import { IconArrowsLeftRight } from "../arrows-left-right";
import { IconCircleExclamation } from "../circle-exclamation";
import { IconEllipsis } from "../ellipsis";
import { IconInfoCircle } from "../info-circle";
import { IconStorybook } from "../storybook";
import { IconXMark } from "../x-mark";
import styles from "./stories.module.css";

const meta = {
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Icons = {
  render: () => (
    <Gap flow="column wrap" gap="1rem">
      <div className={styles.group}>
        <IconAngleDown className={styles.icon} />
        {IconAngleDown.name}
      </div>
      <div className={styles.group}>
        <IconArrowRight className={styles.icon} />
        {IconArrowRight.name}
      </div>
      <div className={styles.group}>
        <IconArrowUpRightFromSquare className={styles.icon} />
        {IconArrowUpRightFromSquare.name}
      </div>
      <div className={styles.group}>
        <IconArrowsLeftRight className={styles.icon} />
        {IconArrowsLeftRight.name}
      </div>
      <div className={styles.group}>
        <IconCircleExclamation className={styles.icon} />
        {IconCircleExclamation.name}
      </div>
      <div className={styles.group}>
        <IconEllipsis className={styles.icon} />
        {IconEllipsis.name}
      </div>
      <div className={styles.group}>
        <IconInfoCircle className={styles.icon} />
        {IconInfoCircle.name}
      </div>
      <div className={styles.group}>
        <IconStorybook className={styles.icon} />
        {IconStorybook.name}
      </div>
      <div className={styles.group}>
        <IconXMark className={styles.icon} />
        {IconXMark.name}
      </div>
    </Gap>
  ),
} satisfies Story;
