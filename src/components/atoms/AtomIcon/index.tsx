import { forwardRef } from "react";
import { AtomIconProps } from "./types";
import { stylesIcon } from "./css";

const AtomIcon = forwardRef<HTMLButtonElement, AtomIconProps>((props, ref) => {
  const { children } = props;
  const styles = stylesIcon(props);

  return (
    <i {...props} ref={ref} className={styles}>
      {children}
    </i>
  );
});

AtomIcon.displayName = "AtomIcon";

export default AtomIcon;
