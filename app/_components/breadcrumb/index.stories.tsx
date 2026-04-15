import preview from "../../../.storybook/preview";
import { Breadcrumb } from ".";

const meta = preview.meta({
  component: Breadcrumb,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
});

export const OnTopPage = meta.story({
  args: {
    text: "",
  },
  parameters: {
    nextjs: {
      navigation: { pathname: "/" },
    },
  },
});

export const OnFooPage = meta.story({
  args: {
    text: "Foo",
  },
  parameters: {
    nextjs: {
      navigation: { pathname: "/foo" },
    },
  },
});
