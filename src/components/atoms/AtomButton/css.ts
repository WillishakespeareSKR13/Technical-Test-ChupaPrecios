import { cv, cx } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { AtomButtonProps } from "./types";

export const cssButton = css`
  width: max-content;
  padding: 0.4rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  cursor: pointer;
`;

const cssButonSolid = css`
  background-color: var(--color-primary);
  color: var(--text-color-light);
  border: 1px solid var(--color-primary);
`;

const cssButonOutline = css`
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
  const { className, astype = "solid" } = props;
  const classes = cx([cvAsType(astype), className]);
  return classes;
};
