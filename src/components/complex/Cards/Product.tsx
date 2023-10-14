import AtomButton from "@/components/atoms/AtomButton";
import AtomHeading from "@/components/atoms/AtomHeading";
import AtomIcon from "@/components/atoms/AtomIcon";
import AtomParagraph from "@/components/atoms/AtomParagraph";
import AtomWrapper from "@/components/atoms/AtomWrapper";
import { IProduct } from "@/types/product";
import { css } from "@kuma-ui/core";
import Link from "next/link";
import ButtonAddCart from "../Butons/AddCart";
import TagQuantityProduct from "../Tags/QuantityProduct";
import TagPriceProduct from "../Tags/PriceProduct";

type Props = {
  product: IProduct;
};

const CardProduct = (props: Props) => {
  const { product } = props;
  return (
    <AtomWrapper
      css={css`
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: var(--background-card);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        border: var(--border);
        background-color: var(--background);
        overflow: hidden;
      `}
    >
      <Link
        href={`/product/${product?.id}`}
        className={css`
          position: relative;
          background-color: var(--background-card-alt);
          border-radius: var(--radius);
          &:hover {
            filter: contrast(0.9);
          }
          transition: all 0.4s ease-in-out;
        `}
      >
        <TagQuantityProduct id={product.id} />
        <TagPriceProduct product={product} />
        <img
          src={product?.image}
          alt={product?.title}
          className={css`
            width: 100%;
            height: 250px;
            object-fit: contain;
            padding: var(--space-large);
            border-radius: var(--radius);
            mix-blend-mode: multiply;
            filter: contrast(1) brightness(1);
            &:hover {
              transform: scale(1.09);
              filter: brightness(1.1) contrast(1.1);
            }
            transition: all 0.4s ease-in-out;
          `}
        />
      </Link>
      <AtomWrapper
        css={css`
          flex-direction: column;
          padding: var(--space-large) var(--space-large);
          background-color: var(--background-card);
          gap: var(--space-large);
        `}
      >
        <AtomWrapper
          css={css`
            flex: 1;
            flex-direction: column;
            gap: var(--space-small);
          `}
        >
          <AtomHeading
            as="h4"
            className={css`
              font-weight: 600 !important;
              font-size: 16px !important;
              color: var(--color-text) !important;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            `}
          >
            {product?.title}
          </AtomHeading>
          <AtomParagraph
            className={css`
              font-weight: 400;
              font-size: 12px !important;
              color: var(--color-text-alt) !important;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            `}
          >
            {product?.description}
          </AtomParagraph>
        </AtomWrapper>
        <AtomWrapper
          css={css`
            gap: var(--space-regular);
            a {
              width: 100%;
            }
          `}
        >
          <Link href={`/product/${product?.id}`}>
            <AtomButton
              css={css`
                width: 100% !important;
                background-color: var(--background-card-button) !important;
                border: var(--border) !important;
                box-shadow: var(--box-shadow) !important;
                border-radius: var(--border-radius) !important;
                color: var(--background-card-button-text) !important;
                font-weight: 700 !important;
                &:hover {
                  background-color: var(
                    --background-card-button-hover
                  ) !important;
                }
              `}
            >
              Ver Producto
            </AtomButton>
          </Link>
          <ButtonAddCart product={product}>
            <AtomIcon icon="basket-shopping" />
          </ButtonAddCart>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default CardProduct;
