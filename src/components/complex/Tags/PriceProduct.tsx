import AtomText from "@/components/atoms/AtomText";
import AtomWrapper from "@/components/atoms/AtomWrapper";
import { IProduct } from "@/types/product";
import { cv } from "@/utils/css";
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
        flex-direction: column;
        align-items: flex-end;
        position: absolute;
        bottom: 8px;
        right: 8px;
        z-index: 1;
        gap: var(--space-small);
      `}
    >
      <AtomWrapper css={cvOffer({ offer: product?.hasOffer })}>
        <AtomText>$ {product?.price?.toFixed(2)}</AtomText>
      </AtomWrapper>
      {product?.hasOffer && (
        <AtomWrapper
          css={css`
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
          <AtomText>Offer $ {product?.priceOffer?.toFixed(2)}</AtomText>
        </AtomWrapper>
      )}
    </AtomWrapper>
  );
};

export default TagPriceProduct;

const cssTag = css`
  width: max-content;
  background-color: var(--background-light);
  border: var(--border);
  box-shadow: var(--box-shadow);
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
    color: var(--color-text);
  }
`;

const cssOffer = css`
  background-color: var(--disable) !important;
  border: var(--disable-border) !important;
  box-shadow: var(--box-shadow) !important;
  span {
    color: var(--disable-text) !important;
    text-decoration: line-through;
  }
`;

const cvOffer = cv({
  base: cssTag,
  offer: cssOffer,
});
