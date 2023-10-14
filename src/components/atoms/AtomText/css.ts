import { cv, cx } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { AtomTextProps } from "./types";

export const cssText = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--color-text-alt);
`;

export const cssPrimary = css`
  color: var(--color-primary);
`;

export const cssLight = css`
  color: var(--color-light);
`;

export const cssDark = css`
  color: var(--color-dark);
`;

export const cssAlt = css`
  color: var(--color-alt);
`;

const cvAsTheme = cv({
  base: cssText,
  primary: cssPrimary,
  light: cssLight,
  dark: cssDark,
  alt: cssAlt,
});

export const stylesText = (props: AtomTextProps) => {
  const { className, css, astheme = "dark" } = props;
  const cssAsTheme = cvAsTheme(astheme);
  const classes = cx([cssAsTheme, className, css]);
  return classes;
};
