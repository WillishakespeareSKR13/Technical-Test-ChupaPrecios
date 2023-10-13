import { forwardRef } from "react";
import { AtomButtonProps } from "./types";
import { stylesButton } from "./css";

const AtomButton = forwardRef<HTMLButtonElement, AtomButtonProps>(
  (props, ref) => {
    const { children } = props;
    const styles = stylesButton(props);
    return (
      <button {...props} ref={ref} className={styles}>
        {children}
      </button>
    );
  }
);

AtomButton.displayName = "AtomButton";

export default AtomButton;
