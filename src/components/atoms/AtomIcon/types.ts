import type { HTMLAttributes, DetailedHTMLProps } from "react";

type Icon = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export type AtomIconProps = Omit<Icon, "ref"> & {
  icon: string;
  css?: string;
  astheme?: "primary" | "light" | "dark";
};
