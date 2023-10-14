import { cx } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { AtomInputProps } from "./types";

export const cssInput = css`
  width: max-content;
  height: max-content;
  padding: 8px 22px;
  border-radius: var(--border-radius);
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  font-weight: 500;
  color: var(--color-text);
  cursor: pointer;
  background-color: var(--background-color);
  border: var(--border);
  box-shadow: var(--box-shadow);
  &::placeholder {
    color: var(--color-text-dark);
  }
  &:hover {
    border: var(--border-hover);
    box-shadow: var(--box-shadow-hover);
  }
  &:focus {
    outline: none;
    border: var(--border-focus);
    box-shadow: var(--box-shadow-focus);
  }

  transition: all 0.3s ease-in-out;
`;

export const stylesInput = (props: AtomInputProps) => {
  const { className, css } = props;
  const classes = cx([cssInput, className, css]);
  return classes;
};
