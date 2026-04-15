import { Gap } from "@/_components/gap";
import preview from "../../../.storybook/preview";
import { IconAngleDown } from "../angle-down";
import { IconArrowRight } from "../arrow-right";
import { IconArrowUpRightFromSquare } from "../arrow-up-right-from-square";
import { IconArrowsLeftRight } from "../arrows-left-right";
import { IconCircleExclamation } from "../circle-exclamation";
import { IconCircleInfo } from "../circle-info";
import { IconEllipsis } from "../ellipsis";
import { IconStorybook } from "../storybook";
import { IconXMark } from "../x-mark";
import { Icon } from ".";
import styles from "./stories.module.css";

const meta = preview.meta({
  component: Icon,
});

export const Icons = meta.story({
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
        <IconCircleInfo className={styles.icon} />
        {IconCircleInfo.name}
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
});
