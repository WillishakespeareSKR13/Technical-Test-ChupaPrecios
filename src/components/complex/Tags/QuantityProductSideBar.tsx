import AtomText from "@/components/atoms/AtomText";
import AtomWrapper from "@/components/atoms/AtomWrapper";
import { IProductWithQuantity } from "@/types/product";
import { MoneyIntl } from "@/utils/formaters";
import { css } from "@kuma-ui/core";

type Props = {
  product: IProductWithQuantity;
};

const TagQuantityProductSideBar = (props: Props) => {
  const { product } = props;

  if (!product) return null;

  return (
    <AtomWrapper
      css={css`
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
        padding: var(--space-small) calc(var(--space-medium) * 1.5);
        width: max-content;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <AtomText
        css={css`
          white-space: nowrap;
          font-size: 12px;
          font-weight: 700;
          color: var(--color-text);
        `}
      >
        Total{" "}
        {MoneyIntl.format(
          product?.quantity *
            (product?.hasOffer ? product?.priceOffer : product?.price)
        )}
      </AtomText>
    </AtomWrapper>
  );
};

export default TagQuantityProductSideBar;
