import { cv, cx } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { AtomElementProps } from "./types";

export const cssElement = css`
  display: flex;
`;

export const cssSmall = css`
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.5px;
  color: var(--color-text-light);
`;

export const cssB = css`
  font-weight: 600;
  color: var(--color-primary);
`;

const cvAs = cv({
  base: cssElement,
  section: "",
  article: "",
  main: "",
  header: "",
  footer: "",
  aside: "",
  nav: "",
  small: cssSmall,
  strong: "",
  i: "",
  b: cssB,
  em: "",
  mark: "",
  sub: "",
  code: "",
  cite: "",
});

export const stylesElement = (props: AtomElementProps) => {
  const { className, css, as } = props;
  const cssAs = cvAs(as);
  const classes = cx([cssAs, className, css]);
  return classes;
};
