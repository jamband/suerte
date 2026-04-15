import { fn } from "storybook/test";
import { DispatchContext, StateContext } from "@/_contexts/notification";
import preview from "../../../.storybook/preview";
import { Notification } from ".";

const meta = preview.meta({
  component: Notification,
});

export const Default = meta.story({
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
});

export const LongSentence = meta.story({
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
});
