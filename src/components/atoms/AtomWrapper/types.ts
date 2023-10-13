import type { DetailedHTMLProps, HTMLAttributes } from "react";

type Wrapper = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement | HTMLElement>,
  HTMLDivElement | HTMLElement
>;

export type AsEnum =
  | "div"
  | "section"
  | "article"
  | "main"
  | "header"
  | "footer"
  | "aside"
  | "nav";

export type AtomWrapperProps = Wrapper & {
  as?: AsEnum;
  css?: string;
};
