import { AtomInputProps } from "./types";
import { stylesInput } from "./css";

const AtomInput = (props: AtomInputProps) => {
  const styles = stylesInput(props);

  return <input {...props} className={styles} />;
};

export default AtomInput;
