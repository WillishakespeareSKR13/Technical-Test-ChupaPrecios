import { cx } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { AtomTextProps } from "./types";

export const cssText = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--text-color-alt);
`;

export const stylesText = (props: AtomTextProps) => {
  const { className, css } = props;
  const classes = cx([cssText, className, css]);
  return classes;
};
