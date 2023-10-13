import { forwardRef } from "react";
import { AsEnumElement, AtomElementProps, IGetElement } from "./types";
import { stylesElement } from "./css";

const getElement = (props: IGetElement) => {
  const { as = "section" } = props;
  const Elements = {
    section: <section {...props} />,
    article: <article {...props} />,
    main: <main {...props} />,
    header: <header {...props} />,
    footer: <footer {...props} />,
    aside: <aside {...props} />,
    nav: <nav {...props} />,
  } as Record<AsEnumElement, JSX.Element>;
  return Elements[as];
};

const AtomElement = forwardRef<HTMLElement, AtomElementProps>((props, ref) => {
  const styles = stylesElement(props);
  const Element = getElement({ ...props, className: styles, ref });
  return Element;
});

AtomElement.displayName = "AtomElement";

export default AtomElement;
