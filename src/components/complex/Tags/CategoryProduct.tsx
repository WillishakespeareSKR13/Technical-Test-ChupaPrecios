import AtomText from "@/components/atoms/AtomText";
import AtomWrapper from "@/components/atoms/AtomWrapper";
import { IProduct } from "@/types/product";
import { css } from "@kuma-ui/core";

type Props = {
  product: IProduct;
};

const TagCategoryProduct = (props: Props) => {
  const { product } = props;

  if (!product) return null;

  return (
    <AtomWrapper
      css={css`
        position: absolute;
        top: 5px;
        left: 5px;
        z-index: 1;
        background-color: var(--background-light);
        border: var(--border);
        box-shadow: var(--box-shadow);
        color: var(--color-primary);
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-bold);
        border-radius: var(--border-radius);
        padding: var(--space-small) var(--space-regular);
        width: max-content;
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
      <AtomText>{product?.category}</AtomText>
    </AtomWrapper>
  );
};

export default TagCategoryProduct;
