import { forwardRef } from "react";
import { AtomInputProps } from "./types";
import { stylesInput } from "./css";

const AtomInput = forwardRef<HTMLInputElement, AtomInputProps>((props, ref) => {
  const styles = stylesInput(props);
  return <input {...props} ref={ref} className={styles} />;
});

AtomInput.displayName = "AtomInput";

export default AtomInput;
