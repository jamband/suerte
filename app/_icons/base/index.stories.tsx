import { Gap } from "@/_components/gap";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from ".";
import { IconBoxArrowUpRight } from "../box-arrow-up-right";
import { IconChevronDown } from "../chevron-down";
import { IconChevronLeft } from "../chevron-left";
import { IconChevronRight } from "../chevron-right";
import { IconExclamationTriangleFill } from "../exclamation-triangle-fill";
import { IconInfoCircleFill } from "../info-circle-fill";
import { IconThreeDots } from "../three-dots";
import { IconX } from "../x";
import styles from "./stories.module.css";

const meta = {
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Icons = {
  render: () => (
    <Gap direction="column" gap="1rem">
      <div className={styles.group}>
        <IconBoxArrowUpRight className={styles.icon} />
        {IconBoxArrowUpRight.name}
      </div>
      <div className={styles.group}>
        <IconChevronDown className={styles.icon} />
        {IconChevronDown.name}
      </div>
      <div className={styles.group}>
        <IconChevronLeft className={styles.icon} />
        {IconChevronLeft.name}
      </div>
      <div className={styles.group}>
        <IconChevronRight className={styles.icon} />
        {IconChevronRight.name}
      </div>
      <div className={styles.group}>
        <IconExclamationTriangleFill className={styles.icon} />
        {IconExclamationTriangleFill.name}
      </div>
      <div className={styles.group}>
        <IconInfoCircleFill className={styles.icon} />
        {IconInfoCircleFill.name}
      </div>
      <div className={styles.group}>
        <IconThreeDots className={styles.icon} />
        {IconThreeDots.name}
      </div>
      <div className={styles.group}>
        <IconX className={styles.icon} />
        {IconX.name}
      </div>
    </Gap>
  ),
} satisfies Story;
