import { forwardRef } from "react";
import { AtomWrapperProps } from "./types";
import { stylesWrapper } from "./css";

const AtomWrapper = forwardRef<HTMLDivElement, AtomWrapperProps>(
  (props, ref) => {
    const styles = stylesWrapper(props);
    return <div {...props} ref={ref} className={styles} />;
  }
);

AtomWrapper.displayName = "AtomWrapper";

export default AtomWrapper;
