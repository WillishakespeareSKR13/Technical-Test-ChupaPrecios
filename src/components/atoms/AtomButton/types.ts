import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Button = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type AtomButtonProps = Button & {
  astype?: "solid" | "outline";
  css?: string;
};
