import { forwardRef } from "react";
import { AtomElementProps } from "./types";
import { stylesElement } from "./css";
import { getElement } from "./elements";

const AtomElement = forwardRef<HTMLElement, AtomElementProps>((props, ref) => {
  const styles = stylesElement(props);
  const Element = getElement({ ...props, className: styles, ref });
  return Element;
});

AtomElement.displayName = "AtomElement";

export default AtomElement;
