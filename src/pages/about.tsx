import { LinkExternal } from "../components/link-external";
import { APP_NAME } from "../constants/app";
import { Layout } from "../layouts/layout";

export default function Page() {
  return (
    <>
      <h1>About</h1>
      <p>
        {APP_NAME} is my private playground for{" "}
        <LinkExternal href="https://nextjs.org">Next.js</LinkExternal> and{" "}
        <LinkExternal href="https://getbootstrap.com">Bootstrap 5</LinkExternal>
        .
      </p>
      <p>
        This website is an open source project. See{" "}
        <LinkExternal href="https://github.com/jamband/suerte">
          GitHub
        </LinkExternal>{" "}
        for details.
      </p>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="About">{page}</Layout>
);
