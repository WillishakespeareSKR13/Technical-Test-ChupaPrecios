type Wrapper = React.HTMLAttributes<HTMLDivElement>;

export type AtomWrapperProps = Wrapper & {
  as?: "div" | "section" | "article" | "main" | "header" | "footer" | "aside";
};
