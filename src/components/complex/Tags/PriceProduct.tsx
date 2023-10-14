import AtomText from "@/components/atoms/AtomText";
import AtomWrapper from "@/components/atoms/AtomWrapper";
import { IProduct } from "@/types/product";
import { css } from "@kuma-ui/core";

type Props = {
  product: IProduct;
};

const TagPriceProduct = (props: Props) => {
  const { product } = props;

  if (!product) return null;

  return (
    <AtomWrapper
      css={css`
        position: absolute;
        bottom: 8px;
        right: 8px;
        z-index: 1;
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary-light);
        box-shadow: var(--box-shadow);
        color: var(--color-primary);
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-bold);
        border-radius: var(--border-radius);
        padding: var(--space-small) var(--space-regular);
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-size: 12px;
          font-weight: 700;
          color: var(--color-text-light);
        }
      `}
    >
      <AtomText>$ {product?.price}</AtomText>
    </AtomWrapper>
  );
};

export default TagPriceProduct;
