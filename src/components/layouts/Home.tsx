import FooterPublic from "@/components/complex/Footers/Public";
import HeaderPublic from "@/components/complex/Headers/Public";
import { css } from "@kuma-ui/core";

import AtomElement from "../atoms/AtomElement";

import { AtomElementProps } from "../atoms/AtomElement/types";
import SideBarShoppingCart from "../complex/SideBars/ShoppingCart";

type Props = {
  children: React.ReactNode;
  wrapper?: AtomElementProps;
};

const LayoutHome = (props: Props) => {
  const { children, wrapper } = props;
  return (
    <>
      <HeaderPublic />
      <AtomElement
        as="main"
        css={css`
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        `}
        {...wrapper}
      >
        {children}
        <SideBarShoppingCart />
      </AtomElement>
      <FooterPublic />
    </>
  );
};

export default LayoutHome;
