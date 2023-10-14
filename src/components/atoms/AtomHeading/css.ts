import { cx, cv } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { AtomHeadingProps } from "./types";

export const cssHeading = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--text-color);
`;

const cssHeadingH6 = css`
  font-size: 14px;
`;

const cssHeadingH5 = css`
  font-size: 16px;
`;

const cssHeadingH4 = css`
  font-size: 18px;
`;

const cssHeadingH3 = css`
  font-size: 20px;
`;

const cssHeadingH2 = css`
  font-size: 24px;
`;

const cssHeadingH1 = css`
  font-size: 32px;
`;

export const cvAs = cv({
  base: cssHeading,
  h1: cssHeadingH1,
  h2: cssHeadingH2,
  h3: cssHeadingH3,
  h4: cssHeadingH4,
  h5: cssHeadingH5,
  h6: cssHeadingH6,
});

export const stylesHeading = (props: AtomHeadingProps) => {
  const { className, css, as = "h1" } = props;
  const cssAs = cvAs(as);
  const classes = cx([cssAs, className, css]);
  return classes;
};
