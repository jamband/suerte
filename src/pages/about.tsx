import { APP_NAME } from "@/constants/app";
import { IconBoxArrowUpRight } from "@/icons/box-arrow-up-right";
import { Layout } from "@/layouts/layout";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
  return (
    <>
      <h1>About</h1>
      <p>
        {APP_NAME} is my private playground for{" "}
        <a href="https://nextjs.org" target="_blank" rel="noreferrer">
          Next.js
          <IconBoxArrowUpRight
            style={{
              marginLeft: "0.2rem",
              height: "0.8em",
              width: "0.8em",
              verticalAlign: "0em",
            }}
          />
        </a>{" "}
        and{" "}
        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
          Bootstrap 5
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
              height: "0.8em",
              width: "0.8em",
              verticalAlign: "0em",
            }}
          />
        </a>{" "}
        for details.
      </p>
    </>
  );
};

Page.getLayout = (page) => <Layout title="About">{page}</Layout>;

export default Page;
