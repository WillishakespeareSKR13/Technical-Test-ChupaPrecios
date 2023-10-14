import { cv, cx } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { AtomIconProps } from "./types";

export const cssIcon = css`
  font-size: 14px;
  height: 14px;
  font-weight: 400;
  font-family: "Font Awesome 5 Free";
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

const cvAsTheme = cv({
  base: cssIcon,
  primary: cssPrimary,
  light: cssLight,
  dark: cssDark,
});

export const stylesIcon = (props: AtomIconProps) => {
  const { className, css, icon, astheme = "primary" } = props;

  const iconAwesome = `fas fa-${icon}`;
  const cssAsTheme = cvAsTheme(astheme);

  const classes = cx([cssAsTheme, className, css, iconAwesome]);
  return classes;
};
