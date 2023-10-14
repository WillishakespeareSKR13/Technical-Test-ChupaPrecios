import type { DetailedHTMLProps, HTMLAttributes, ForwardedRef } from "react";
import { AsEnumElement } from "./constants";

type Element = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export type AtomElementProps = Omit<Element, "ref"> & {
  as?: AsEnumElement;
  css?: string;
};

export type IGetElement = AtomElementProps & {
  ref?: ForwardedRef<HTMLElement>;
};
