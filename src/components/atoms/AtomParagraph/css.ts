import { cx } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { AtomParagraphProps } from "./types";

export const cssParagraph = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--text-color-alt);
`;

export const stylesParagraph = (props: AtomParagraphProps) => {
  const { className, css } = props;
  const classes = cx([cssParagraph, className, css]);
  return classes;
};
