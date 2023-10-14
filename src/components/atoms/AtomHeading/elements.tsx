import { AsEnumHeading } from "./constans";
import { IGetHeading } from "./types";

export const getHeading = (props: IGetHeading) => {
  const { as = "h1" } = props;
  const Headings = {
    h1: <h1 {...props} />,
    h2: <h2 {...props} />,
    h3: <h3 {...props} />,
    h4: <h4 {...props} />,
    h5: <h5 {...props} />,
    h6: <h6 {...props} />,
  } as Record<AsEnumHeading, JSX.Element>;
  return Headings[as];
};
