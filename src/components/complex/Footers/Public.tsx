import AtomElement from "@/components/atoms/AtomElement";
import { css } from "@kuma-ui/core";

const FooterPublic = () => {
  return (
    <AtomElement
      as="footer"
      css={css`
        position: sticky;
        bottom: 0;
        flex-direction: column;
        background-color: var(--background-dark);
      `}
    >
      asdsd
      <AtomElement as="small">
        Copyright © Chupaprecios all rights reserved. Powered by Chupaprecio
      </AtomElement>
    </AtomElement>
  );
};

export default FooterPublic;
