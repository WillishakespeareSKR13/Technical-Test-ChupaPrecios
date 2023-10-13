import { cx } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { AtomInputProps } from "./types";

export const cssInput = css`
  width: max-content;
  height: max-content;
  padding: 8px 22px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
`;

export const stylesInput = (props: AtomInputProps) => {
  const { className, css } = props;
  const classes = cx([cssInput, className, css]);
  return classes;
};
