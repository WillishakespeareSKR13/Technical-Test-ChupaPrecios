import { ThemeKey } from "@/types/theme";
import type { HTMLAttributes, DetailedHTMLProps } from "react";

type Text = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export type AtomTextProps = Omit<Text, "ref"> & {
  css?: string;
  astheme?: ThemeKey;
};
