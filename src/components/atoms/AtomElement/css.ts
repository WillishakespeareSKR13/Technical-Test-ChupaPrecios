import { cx } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { AtomElementProps } from "./types";

export const cssElement = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
`;

export const stylesElement = (props: AtomElementProps) => {
  const { className, css } = props;
  const classes = cx([cssElement, className, css]);
  return classes;
};
