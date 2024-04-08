import type { useNotificationState } from "@/_hooks/notification";

export type _Props = {
  containerRef: React.RefObject<HTMLDivElement>;
  notification: ReturnType<typeof useNotificationState>;
  onClick: () => void;
};
