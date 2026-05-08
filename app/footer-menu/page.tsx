import type { Metadata } from "next";
import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import { StorybookLinks } from "@/_components/storybook-links";
import { Content } from "./_components/content";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Footer Menu",
};

export default function Page() {
  const storybookLinks = [
    { slug: "components-breadcrumb--on-foo-page", text: "Breadcrumb" },
    { slug: "components-heading--default", text: "Heading" },
  ];

  return (
    <div className={styles.container}>
      <Breadcrumb text="Footer Menu" />
      <Heading>Footer Menu</Heading>
      <Content />
      <StorybookLinks links={storybookLinks} />
    </div>
  );
}
