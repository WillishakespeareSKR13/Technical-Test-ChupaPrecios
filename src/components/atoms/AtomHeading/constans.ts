export const HEADINGS = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

export type HeadingArray = typeof HEADINGS;

export type AsEnumHeading = HeadingArray[number];
