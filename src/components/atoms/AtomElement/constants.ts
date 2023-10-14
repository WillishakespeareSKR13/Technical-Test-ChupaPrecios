export const ELEMENTS = [
  "section",
  "article",
  "main",
  "header",
  "footer",
  "aside",
  "nav",
  "small",
  "strong",
  "i",
  "b",
  "em",
  "mark",
  "sub",
  "code",
  "cite",
] as const;

export type ElementArray = typeof ELEMENTS;

export type AsEnumElement = ElementArray[number];
