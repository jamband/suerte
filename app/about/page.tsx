import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import { APP_NAME } from "@/_constants/app";
import { IconArrowUpRightFromSquare } from "@/_icons/arrow-up-right-from-square";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="About" />
      <Heading>About</Heading>
      <p className={styles.description}>
        {APP_NAME} is my private playground for{" "}
        <a
          href="https://nextjs.org"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          Next.js
          <IconArrowUpRightFromSquare className={styles.icon} />
        </a>{" "}
        and{" "}
        <a
          href="https://storybook.js.org"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          Storybook
          <IconArrowUpRightFromSquare className={styles.icon} />
        </a>
        .
      </p>
      <p className={styles.description}>
        This website is an open source project. See{" "}
        <a
          href="https://github.com/jamband/suerte"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <IconArrowUpRightFromSquare className={styles.icon} />
        </a>{" "}
        for details.
      </p>
    </>
  );
}
