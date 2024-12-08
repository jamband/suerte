import { DispatchContext, StateContext } from "@/_contexts/notification";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Notification } from ".";

const meta = {
  component: Notification,
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default = {
  decorators: [
    (Story) => (
      <>
        <StateContext value="foo">
          <DispatchContext value={fn()}>
            <Story />
          </DispatchContext>
        </StateContext>
      </>
    ),
  ],
} satisfies Story;

export const LongSentence = {
  decorators: [
    (Story) => (
      <>
        <StateContext value={`foo `.repeat(30).trim()}>
          <DispatchContext value={fn()}>
            <Story />
          </DispatchContext>
        </StateContext>
      </>
    ),
  ],
} satisfies Story;
