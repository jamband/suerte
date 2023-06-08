import { IconInfoCircleFill } from "@/_icons/info-circle-fill";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta = {
  title: "_components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "button",
    className: "btn-primary",
    children: "foo",
  },
};

export const Sizings: Story = {
  args: {
    type: "button",
    className: "btn-primary",
    children: "foo",
  },
  argTypes: {
    className: {
      control: "inline-radio",
      options: {
        small: "btn-primary btn-sm",
        normal: "btn-primary",
        large: "btn-primary btn-lg",
      },
    },
  },
};

export const Link: Story = {
  args: {
    type: "button",
    className: "btn-link",
    children: "foo",
  },
};

export const WithIcon: Story = {
  args: {
    type: "button",
    className: "btn-primary",
    children: (
      <>
        <IconInfoCircleFill
          style={{ height: "1em", width: "1em", verticalAlign: "-0.125em" }}
        />
        <span className="ms-2">foo</span>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    type: "button",
    className: "btn-primary",
    disabled: true,
    children: "foo",
  },
};
