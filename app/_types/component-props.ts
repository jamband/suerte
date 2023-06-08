export type ComponentProps<T extends React.ElementType> = Omit<
  React.ComponentProps<T>,
  "className"
>;
