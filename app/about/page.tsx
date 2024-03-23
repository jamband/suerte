import { Breadcrumb } from "@/_components/breadcrumb";
import { APP_NAME } from "@/_constants/app";
import { IconBoxArrowUpRight } from "@/_icons/box-arrow-up-right";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="About" />
      <h1>About</h1>
      <p>
        {APP_NAME} is my private playground for{" "}
        <a href="https://nextjs.org" target="_blank" rel="noreferrer">
          Next.js
          <IconBoxArrowUpRight
            style={{
              marginLeft: "0.2rem",
              height: "1rem",
              width: "1rem",
              verticalAlign: "0em",
            }}
          />
        </a>{" "}
        and{" "}
        <a href="https://storybook.js.org" target="_blank" rel="noreferrer">
          Storybook
          <IconBoxArrowUpRight
            style={{
              marginLeft: "0.2rem",
              height: "1rem",
              width: "1rem",
              verticalAlign: "0em",
            }}
          />
        </a>
        .
      </p>
      <p>
        This website is an open source project. See{" "}
        <a
          href="https://github.com/jamband/suerte"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <IconBoxArrowUpRight
            style={{
              marginLeft: "0.2rem",
              height: "1rem",
              width: "1rem",
              verticalAlign: "0em",
            }}
          />
        </a>{" "}
        for details.
      </p>
    </>
  );
}
