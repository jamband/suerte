import { IconBoxArrowUpRight } from "@/_icons/box-arrow-up-right";
import { Breadcrumb } from "@/_layouts/breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Contact" />
      <h1>Contact</h1>
      Please to the message via{" "}
      <a href="https://twitter.com/livejam_db" target="_blank" rel="noreferrer">
        Twitter
        <IconBoxArrowUpRight
          style={{
            marginLeft: "0.2rem",
            height: "0.8em",
            width: "0.8em",
            verticalAlign: "0em",
          }}
        />
      </a>{" "}
      or{" "}
      <a
        href="https://github.com/jamband/suerte/issues"
        target="_blank"
        rel="noreferrer"
      >
        GitHub Issues
        <IconBoxArrowUpRight
          style={{
            marginLeft: "0.2rem",
            height: "0.8em",
            width: "0.8em",
            verticalAlign: "0em",
          }}
        />
      </a>
      .
    </>
  );
}
