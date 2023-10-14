"use client";

import AtomButton from "@/components/atoms/AtomButton";
import { CartShopAtom } from "@/jotai/CarShop";
import { css } from "@kuma-ui/core";
import { useAtomValue } from "jotai";

type Props = {
  children: React.ReactNode;
};

const ButtonOpenCart = (props: Props) => {
  const { children } = props;
  const carShops = useAtomValue(CartShopAtom);
  console.log(carShops);
  return (
    <AtomButton
      onClick={() => {}}
      astype="outline"
      css={css`
        padding: 0 12px;
      `}
    >
      {children}
    </AtomButton>
  );
};

export default ButtonOpenCart;
