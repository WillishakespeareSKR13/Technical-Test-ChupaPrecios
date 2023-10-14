import type { HTMLAttributes, DetailedHTMLProps, ForwardedRef } from "react";
import { AsEnumHeading } from "./constans";

type Heading = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export type AtomHeadingProps = Omit<Heading, "ref"> & {
  as?: AsEnumHeading;
  css?: string;
};

export type IGetHeading = AtomHeadingProps & {
  ref: ForwardedRef<HTMLHeadingElement>;
};
