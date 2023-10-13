import { cx } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { AtomParagraphProps } from "./types";

export const cssParagraph = css`
  width: max-content;
  height: max-content;
  padding: 8px 22px;
  border-radius: var(--border-radius);
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
`;

export const stylesParagraph = (props: AtomParagraphProps) => {
  const { className, css } = props;
  const classes = cx([cssParagraph, className, css]);
  return classes;
};
