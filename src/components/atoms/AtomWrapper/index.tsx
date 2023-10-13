import { forwardRef } from "react";
import { AsEnum, AtomWrapperProps } from "./types";
import { stylesWrapper } from "./css";

const getWrapper = (props: AtomWrapperProps) => {
  const { as = "div" } = props;
  const wrappers = {
    div: <div {...(props as any)} />,
    section: <section {...props} />,
    article: <article {...props} />,
    main: <main {...props} />,
    header: <header {...props} />,
    footer: <footer {...props} />,
    aside: <aside {...props} />,
    nav: <nav {...props} />,
  } as Record<AsEnum, JSX.Element>;
  return wrappers[as];
};

const AtomWrapper = forwardRef<HTMLDivElement, AtomWrapperProps>(
  (props, ref) => {
    const styles = stylesWrapper(props);
    const wrapper = getWrapper({ ...props, className: styles, ref });
    return wrapper;
  }
);

AtomWrapper.displayName = "AtomWrapper";

export default AtomWrapper;
