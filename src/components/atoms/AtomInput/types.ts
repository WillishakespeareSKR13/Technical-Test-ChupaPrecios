type Input = React.InputHTMLAttributes<HTMLInputElement>;

export type AtomInputProps = Input & {
  astype?: "solid" | "outline";
  css?: string;
};
