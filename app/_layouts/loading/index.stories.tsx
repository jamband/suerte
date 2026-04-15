import preview from "../../../.storybook/preview";
import { Header } from "../header";
import { Loading } from ".";

const meta = preview.meta({
  component: Loading,
});

export const Default = meta.story({
  render: () => (
    <>
      <Loading />
      <Header />
    </>
  ),
});
