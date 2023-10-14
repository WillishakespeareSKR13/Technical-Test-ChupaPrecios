import { cv, cx } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { AtomButtonProps } from "./types";

export const cssButton = css`
  width: max-content;
  height: max-content;
  min-height: 35px;
  padding: var(--space-medium) var(--space-large);
  border-radius: var(--border-radius);
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
`;

const cssButonSolid = css`
  font-weight: 600;
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border: 1px solid var(--color-primary);
`;

const cssButonOutline = css`
  font-weight: 600;
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
`;

export const cvAsType = cv({
  base: cssButton,
  solid: cssButonSolid,
  outline: cssButonOutline,
});

export const stylesButton = (props: AtomButtonProps) => {
  const { className, css, astype = "solid" } = props;
  const cssAsType = cvAsType(astype);
  const classes = cx([cssAsType, className, css]);
  return classes;
};
