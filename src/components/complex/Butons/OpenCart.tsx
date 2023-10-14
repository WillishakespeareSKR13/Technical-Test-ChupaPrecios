"use client";

import AtomButton from "@/components/atoms/AtomButton";
import AtomText from "@/components/atoms/AtomText";
import { CartShopAtom } from "@/jotai/CarShop";
import { css } from "@kuma-ui/core";
import { useAtomValue } from "jotai";

type Props = {
  children: React.ReactNode;
};

const ButtonOpenCart = (props: Props) => {
  const { children } = props;
  const { quantity } = useAtomValue(CartShopAtom);

  const hasProducts = quantity > 0;

  return (
    <AtomButton
      onClick={() => {}}
      css={css`
        position: relative;
        padding: 0 12px !important;
      `}
    >
      {hasProducts && (
        <AtomText
          css={css`
            position: absolute;
            top: 0px;
            right: 0px;
            background-color: var(--background-light) !important;
            border: var(--border) !important;
            box-shadow: var(--box-shadow) !important;
            color: var(--color-text) !important;
            font-size: var(--font-size-small) !important;
            font-weight: var(--font-weight-bold) !important;
            border-radius: var(--border-radius) !important;
            min-width: 24px;
            padding: 0 6px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translate(70%, -50%);
          `}
        >
          {Math.min(99, quantity)} {quantity > 99 && "+"}
        </AtomText>
      )}
      {children}
    </AtomButton>
  );
};

export default ButtonOpenCart;
