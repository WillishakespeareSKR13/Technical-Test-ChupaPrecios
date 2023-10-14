"use client";

import AtomButton from "@/components/atoms/AtomButton";
import { CartShopAtom } from "@/jotai/CarShop";
import { IProduct } from "@/types/product";
import { css } from "@kuma-ui/core";
import { useSetAtom } from "jotai";

type Props = {
  product: IProduct;
  children: React.ReactNode;
};

const ButtonAddCart = (props: Props) => {
  const { product, children } = props;
  const setCarShop = useSetAtom(CartShopAtom);
  return (
    <AtomButton
      onClick={() =>
        setCarShop({
          type: "ADD",
          payload: product,
        })
      }
      astype="outline"
      css={css`
        padding: 0 12px;
      `}
    >
      {children}
    </AtomButton>
  );
};

export default ButtonAddCart;
