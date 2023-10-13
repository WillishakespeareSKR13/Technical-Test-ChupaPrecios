import { forwardRef } from "react";
import { AtomTextProps } from "./types";
import { stylesText } from "./css";

const AtomText = forwardRef<HTMLSpanElement, AtomTextProps>((props, ref) => {
  const { children } = props;
  const styles = stylesText(props);
  return (
    <span {...props} ref={ref} className={styles}>
      {children}
    </span>
  );
});

AtomText.displayName = "AtomText";

export default AtomText;
