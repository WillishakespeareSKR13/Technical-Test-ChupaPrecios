import type { HTMLAttributes, DetailedHTMLProps, ForwardedRef } from "react";

type Heading = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export type AsEnumHeading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type AtomHeadingProps = Omit<Heading, "ref"> & {
  as?: AsEnumHeading;
  css?: string;
};

export type IGetHeading = AtomHeadingProps & {
  ref: ForwardedRef<HTMLHeadingElement>;
};
