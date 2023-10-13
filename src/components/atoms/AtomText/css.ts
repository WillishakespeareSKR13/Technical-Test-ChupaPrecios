import { cx } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { AtomTextProps } from "./types";

export const cssText = css`
  width: max-content;
  height: max-content;
  padding: 8px 22px;
  border-radius: var(--border-radius);
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
`;

export const stylesText = (props: AtomTextProps) => {
  const { className, css } = props;
  const classes = cx([cssText, className, css]);
  return classes;
};
