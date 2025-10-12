import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import { IconArrowUpRightFromSquare } from "@/_icons/arrow-up-right-from-square";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Contact" />
      <Heading>Contact</Heading>
      <p className={styles.description}>
        Please to the message via{" "}
        <a
          href="https://twitter.com/livejam_db"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          X
          <IconArrowUpRightFromSquare className={styles.icon} />
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/jamband/suerte/issues"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          GitHub Issues
          <IconArrowUpRightFromSquare className={styles.icon} />
        </a>
        .
      </p>
    </>
  );
}
