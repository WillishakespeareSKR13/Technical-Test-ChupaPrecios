import AtomWrapper from "@/components/atoms/AtomWrapper";
import { IProduct } from "@/constants/product";
import { css } from "@kuma-ui/core";

const CardProduct = (props: IProduct) => {
  const { image, name, price } = props;
  return (
    <AtomWrapper
      css={css`
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: var(--background-light);
        border-radius: var(--radius);
        box-shadow: var(--shadow);
        border: var(--border);
      `}
    >
      <img
        src={image}
        alt={name}
        className={css`
          width: 100%;
          height: 200px;
          object-fit: cover;
        `}
      />
      <AtomWrapper
        css={css`
          padding: var(--space-regular);
        `}
      >
        <h4
          className={css`
            font-weight: 500;
            font-size: 16px;
            color: var(--color-primary);
          `}
        >
          {name}
        </h4>
        <p
          className={css`
            font-weight: 400;
            font-size: 14px;
            color: var(--color-secondary);
          `}
        >
          {price}
        </p>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default CardProduct;
