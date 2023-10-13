import type { DetailedHTMLProps, HTMLAttributes } from "react";

type Wrapper = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type AtomWrapperProps = Omit<Wrapper, "ref"> & {
  css?: string;
};
