import type { DetailedHTMLProps, HTMLAttributes, ForwardedRef } from "react";

type Element = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export type AsEnumElement =
  | "div"
  | "section"
  | "article"
  | "main"
  | "header"
  | "footer"
  | "aside"
  | "nav";

export type AtomElementProps = Omit<Element, "ref"> & {
  as?: AsEnumElement;
  css?: string;
};

export type IGetElement = AtomElementProps & {
  ref?: ForwardedRef<HTMLElement>;
};
