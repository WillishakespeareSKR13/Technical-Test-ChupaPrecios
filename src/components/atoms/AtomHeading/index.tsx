import { forwardRef } from "react";
import { AtomHeadingProps } from "./types";
import { stylesHeading } from "./css";
import { getHeading } from "./elements";

const AtomHeading = forwardRef<HTMLHeadingElement, AtomHeadingProps>(
  (props, ref) => {
    const styles = stylesHeading(props);
    const Heading = getHeading({ ...props, className: styles, ref });
    return Heading;
  }
);

AtomHeading.displayName = "AtomHeading";

export default AtomHeading;
