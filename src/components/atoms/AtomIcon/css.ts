import { cv, cx } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { AtomIconProps } from "./types";

export const cssIcon = css`
  font-size: 14px;
  display: flex !important;
  align-items: center;
  justify-content: flex-end;
  font-weight: 400;
  font-family: "Font Awesome 5 Free";
  transition: all 0.3s ease-in-out;
  transform: translate(0px, 1px);

  width: 17px !important;
  height: 16px !important;
  &:before {
    width: 17px !important;
    height: 16px !important;
  }
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
  base: cssIcon,
  primary: cssPrimary,
  light: cssLight,
  dark: cssDark,
  alt: cssAlt,
});

export const stylesIcon = (props: AtomIconProps) => {
  const { className, css, icon, astheme = "primary" } = props;

  const iconAwesome = `fas fa-${icon}`;
  const cssAsTheme = cvAsTheme(astheme);

  const classes = cx([cssAsTheme, className, css, iconAwesome]);
  return classes;
};
