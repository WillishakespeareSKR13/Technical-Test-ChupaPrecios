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
  const carShops = useAtomValue(CartShopAtom);

  const hasProducts = carShops.length > 0;

  return (
    <AtomButton
      onClick={() => {}}
      astype="outline"
      css={css`
        position: relative;
        padding: 0 12px !important;
        &:hover {
          span {
            background-color: var(--color-primary);
            border: 1px solid var(--background-light);
          }
        }
      `}
    >
      {hasProducts && (
        <AtomText
          css={css`
            position: absolute;
            top: 0px;
            right: 0px;
            background-color: var(--background-light);
            border: var(--border);
            box-shadow: var(--box-shadow);
            color: var(--color-primary);
            font-size: var(--font-size-small);
            font-weight: var(--font-weight-bold);
            border-radius: var(--border-radius);
            min-width: 24px;
            padding: 0 6px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translate(60%, -60%);
          `}
        >
          {Math.min(99, carShops.length)} {carShops.length > 99 && "+"}
        </AtomText>
      )}
      {children}
    </AtomButton>
  );
};

export default ButtonOpenCart;
