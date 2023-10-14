import { AsEnumElement } from "./constants";
import { IGetElement } from "./types";

export const getElement = (props: IGetElement) => {
  const { as = "section" } = props;
  const Elements = {
    section: <section {...props} />,
    article: <article {...props} />,
    main: <main {...props} />,
    header: <header {...props} />,
    footer: <footer {...props} />,
    aside: <aside {...props} />,
    nav: <nav {...props} />,
    small: <small {...props} />,
    strong: <strong {...props} />,
    i: <i {...props} />,
    b: <b {...props} />,
    em: <em {...props} />,
    mark: <mark {...props} />,
    sub: <sub {...props} />,
    code: <code {...props} />,
    cite: <cite {...props} />,
  } as Record<AsEnumElement, JSX.Element>;
  return Elements[as];
};
