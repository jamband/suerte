import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "./_components/breadcrumb";
import { Heading } from "./_components/heading";
import { IconArrowLeft } from "./_icons/arrow-left";
import { IconInfoCircle } from "./_icons/info-circle";
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
          <IconInfoCircle className={styles.descriptionIcon} />
          Page not fonud.
        </p>
        <Link href="/" className={styles.link}>
          <IconArrowLeft className={styles.linkIcon} />
          Back to Home
        </Link>
      </div>
    </>
  );
}
