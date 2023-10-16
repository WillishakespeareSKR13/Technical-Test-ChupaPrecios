"use client";

import AtomButton from "@/components/atoms/AtomButton";
import { AtomButtonProps } from "@/components/atoms/AtomButton/types";
import { CartShopAtom, ICartShopType } from "@/jotai/cart";
import { IProduct } from "@/types/product";
import { css } from "@kuma-ui/core";
import { useSetAtom } from "jotai";

type Props = {
  product: IProduct;
  children: React.ReactNode;
  type: ICartShopType;
  css?: string;
  astype?: AtomButtonProps["astype"];
};

const ButtonChangeCart = (props: Props) => {
  const { product, children, type, astype } = props;
  const setCarShop = useSetAtom(CartShopAtom);
  return (
    <AtomButton
      onClick={() =>
        setCarShop({
          type,
          payload: product,
        })
      }
      astype={astype ?? "solid"}
      className={props.css}
      css={css`
        padding: 0 12px;
      `}
    >
      {children}
    </AtomButton>
  );
};

export default ButtonChangeCart;
