import { cx } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { AtomHeadingProps } from "./types";

export const cssHeading = css`
  width: max-content;
  height: max-content;
  padding: 8px 22px;
  border-radius: var(--border-radius);
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
`;

export const stylesHeading = (props: AtomHeadingProps) => {
  const { className, css } = props;
  const classes = cx([cssHeading, className, css]);
  return classes;
};
