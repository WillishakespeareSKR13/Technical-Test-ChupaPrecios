import type { DetailedHTMLProps, HTMLAttributes } from "react";

type Element = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export type AsEnum =
  | "div"
  | "section"
  | "article"
  | "main"
  | "header"
  | "footer"
  | "aside"
  | "nav";

export type AtomElementProps = Omit<Element, "ref"> & {
  as?: AsEnum;
  css?: string;
};
