import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "./_components/breadcrumb";
import { Heading } from "./_components/heading";
import { IconInfoCircleFill } from "./_icons/info-circle-fill";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <>
      <Breadcrumb text="Not Found" />
      <div className={styles.container}>
        <Heading>Not Found</Heading>
        <p className={styles.description}>
          <IconInfoCircleFill className={styles.icon} />
          Page not fonud.
        </p>
        <Link href="/" className={styles.link}>
          ← Back to Home
        </Link>
      </div>
    </>
  );
}
