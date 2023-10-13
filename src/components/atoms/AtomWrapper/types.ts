type Wrapper = React.HTMLAttributes<HTMLDivElement>;

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
