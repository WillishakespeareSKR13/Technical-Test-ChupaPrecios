import { AtomButtonProps } from "./types";
import { stylesButton } from "./css";

const AtomButton = (props: AtomButtonProps) => {
  const { children } = props;

  const styles = stylesButton(props);

  return (
    <button {...props} className={styles}>
      {children}
    </button>
  );
};

export default AtomButton;
