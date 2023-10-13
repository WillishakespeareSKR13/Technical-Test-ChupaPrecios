import { cx } from "@/utils/css";
import { AtomButtonProps } from "./types";
import { cssButton } from "./css";

const AtomButton = (props: AtomButtonProps) => {
  const { children, className } = props;
  return (
    <button {...props} className={cx([cssButton, className])}>
      {children}
    </button>
  );
};

export default AtomButton;
