import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Button = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type AtomButtonProps = Omit<Button, "ref"> & {
  astype?: "solid" | "outline" | "none";
  css?: string;
};
