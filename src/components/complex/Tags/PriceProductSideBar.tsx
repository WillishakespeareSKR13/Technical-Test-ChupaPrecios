import AtomText from "@/components/atoms/AtomText";
import AtomWrapper from "@/components/atoms/AtomWrapper";
import { IProduct } from "@/types/product";
import { cv } from "@/utils/css";
import { MoneyIntl } from "@/utils/formaters";
import { css } from "@kuma-ui/core";

type Props = {
  product: IProduct;
};

const TagPriceProductSideBar = (props: Props) => {
  const { product } = props;

  if (!product) return null;

  return (
    <AtomWrapper
      css={css`
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        bottom: 8px;
        left: 8px;
        z-index: 1;
        gap: var(--space-small);
      `}
    >
      {product?.hasOffer ? (
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
            height: 28px;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
              font-size: 10px;
              font-weight: 700;
              color: var(--color-text-light);
            }
          `}
        >
          <AtomText>Offer {MoneyIntl.format(product?.priceOffer)}</AtomText>
        </AtomWrapper>
      ) : (
        <AtomWrapper css={cvOffer({ offer: product?.hasOffer })}>
          <AtomText>{MoneyIntl.format(product?.price)}</AtomText>
        </AtomWrapper>
      )}
    </AtomWrapper>
  );
};

export default TagPriceProductSideBar;

const cssTag = css`
  width: max-content;
  background-color: var(--background-light);
  border: var(--border);
  box-shadow: var(--box-shadow);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
  border-radius: var(--border-radius);
  padding: var(--space-small) var(--space-regular);
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 10px;
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
