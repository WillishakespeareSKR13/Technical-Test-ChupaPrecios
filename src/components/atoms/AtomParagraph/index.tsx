import { forwardRef } from "react";
import { AtomParagraphProps } from "./types";
import { stylesParagraph } from "./css";

const AtomParagraph = forwardRef<HTMLParagraphElement, AtomParagraphProps>(
  (props, ref) => {
    const { children } = props;
    const styles = stylesParagraph(props);
    return (
      <p {...props} ref={ref} className={styles}>
        {children}
      </p>
    );
  }
);

AtomParagraph.displayName = "AtomParagraph";

export default AtomParagraph;
