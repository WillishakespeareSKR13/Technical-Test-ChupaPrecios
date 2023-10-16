import AtomButton from "@/components/atoms/AtomButton";
import AtomHeading from "@/components/atoms/AtomHeading";
import AtomParagraph from "@/components/atoms/AtomParagraph";
import AtomWrapper from "@/components/atoms/AtomWrapper";
import { IProductWithQuantity } from "@/types/product";
import { css } from "@kuma-ui/core";
import React from "react";
import ButtonChangeCart from "../Butons/ChangeCart";
import AtomIcon from "@/components/atoms/AtomIcon";
import { cv } from "@/utils/css";
import TagPriceProductSideBar from "../Tags/PriceProductSideBar";
import TagQuantityProductSideBar from "../Tags/QuantityProductSideBar";
import Link from "next/link";

type Props = {
  product: IProductWithQuantity;
};

const CardProductSideBar = (props: Props) => {
  const { product } = props;
  return (
    <AtomWrapper
      key={product.id}
      css={css`
        width: 100%;
        flex-direction: column;
        background-color: var(--background);
        border: var(--border);
        box-shadow: var(--box-shadow);
        border-radius: 4px;
      `}
    >
      <AtomWrapper
        css={css`
          width: 100%;
          position: relative;
        `}
      >
        <AtomWrapper>
          <Link href={`/products/${product?.id}`}>
            <img
              src={product?.image}
              alt={product?.title}
              className={css`
                width: 120px;
                height: 120px;
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
        </AtomWrapper>
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
        </AtomWrapper>
        <TagPriceProductSideBar product={product} />
      </AtomWrapper>
      <AtomWrapper
        css={css`
          background-color: var(--background-shopping-sidebar);
          gap: var(--space-regular);
          padding: var(--space-medium);
          justify-content: space-between;
          align-items: center;
        `}
      >
        <TagQuantityProductSideBar product={product} />

        <AtomWrapper
          css={css`
            gap: var(--space-small);
          `}
        >
          {product?.quantity > 1 ? (
            <ButtonChangeCart
              astype="none"
              product={product}
              type="REMOVE"
              css={cssButton({})}
            >
              <AtomIcon icon="minus" astheme="alt" />
            </ButtonChangeCart>
          ) : (
            <ButtonChangeCart product={product} type="REMOVE">
              <AtomIcon icon="trash" />
            </ButtonChangeCart>
          )}

          <AtomButton astype="none" css={cssButton({})}>
            {product?.quantity}
          </AtomButton>

          <ButtonChangeCart
            astype="none"
            product={product}
            type="ADD"
            css={cssButton({})}
          >
            <AtomIcon icon="plus" astheme="alt" />
          </ButtonChangeCart>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default CardProductSideBar;

const cssButton = cv({
  base: css`
    width: max-content !important;
    background-color: var(--background-card-button) !important;
    border: var(--border) !important;
    box-shadow: var(--box-shadow) !important;
    border-radius: var(--border-radius) !important;
    color: var(--color-text) !important;
    font-weight: 700 !important;
    &:hover {
      background-color: var(--background-card-button-hover) !important;
    }
  `,
  main: css`
    background-color: var(--color-primary) !important;
  `,
  padding: css`
    padding: var(--space-medium) var(--space-large) !important;
  `,
});
