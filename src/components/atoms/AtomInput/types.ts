import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

type Input = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type AtomInputProps = Input & {
  astype?: "solid" | "outline";
  css?: string;
};
