import type { HTMLAttributes, DetailedHTMLProps } from "react";

type Paragraph = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export type AtomParagraphProps = Omit<Paragraph, "ref"> & {
  css?: string;
};
