export type _Props = {
  bar: number;
  action: () => void;
  actionText: "Start" | "Pause" | "Continue";
  clear: () => void;
  progressText: string;
};
