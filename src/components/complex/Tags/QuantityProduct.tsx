"use client";
import AtomText from "@/components/atoms/AtomText";
import AtomWrapper from "@/components/atoms/AtomWrapper";
import { CartShopAtom } from "@/jotai/cart";
import { css } from "@kuma-ui/core";
import { useAtomValue } from "jotai";

type Props = {
  id: number;
};

const TagQuantityProduct = (props: Props) => {
  const { id } = props;
  const { findProduct } = useAtomValue(CartShopAtom);

  const product = findProduct(id);

  if (!product) return null;

  return (
    <AtomWrapper
      css={css`
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 1;
        background-color: var(--background-light);
        border: var(--border);
        box-shadow: var(--box-shadow);
        color: var(--color-primary);
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-bold);
        border-radius: var(--border-radius);
        padding: var(--space-small);
        width: 36px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-size: 12px;
          font-weight: 700;
          color: var(--color-text-alt);
        }
      `}
    >
      <AtomText>
        {Math.min(99, product?.quantity)} {product?.quantity > 99 && "+"}
      </AtomText>
    </AtomWrapper>
  );
};

export default TagQuantityProduct;
