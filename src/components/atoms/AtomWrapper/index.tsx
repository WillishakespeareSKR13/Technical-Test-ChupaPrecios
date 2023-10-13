import { AtomWrapperProps } from "./types";
import { stylesWrapper } from "./css";

const getWrapper = (props: AtomWrapperProps) => {
  const { as = "div" } = props;
  const wrappers = {
    div: <div {...props} />,
    section: <section {...props} />,
    article: <article {...props} />,
    main: <main {...props} />,
    header: <header {...props} />,
    footer: <footer {...props} />,
    aside: <aside {...props} />,
  };
  return wrappers[as];
};

const AtomWrapper = (props: AtomWrapperProps) => {
  const styles = stylesWrapper(props);
  const wrapper = getWrapper({ ...props, className: styles });

  return wrapper;
};

export default AtomWrapper;
