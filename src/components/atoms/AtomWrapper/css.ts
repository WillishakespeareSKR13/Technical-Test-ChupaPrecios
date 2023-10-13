import { cx } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { AtomWrapperProps } from "./types";

export const cssWrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const stylesWrapper = (props: AtomWrapperProps) => {
  const { className, css } = props;
  const classes = cx([cssWrapper, className, css]);
  return classes;
};
