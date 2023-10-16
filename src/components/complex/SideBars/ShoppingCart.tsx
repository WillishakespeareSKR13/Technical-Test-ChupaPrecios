"use client";

import AtomButton from "@/components/atoms/AtomButton";
import AtomElement from "@/components/atoms/AtomElement";
import AtomIcon from "@/components/atoms/AtomIcon";
import AtomParagraph from "@/components/atoms/AtomParagraph";
import AtomWrapper from "@/components/atoms/AtomWrapper";
import { ModalCartAtom } from "@/jotai/modals";
import { cv } from "@/utils/css";
import { css } from "@kuma-ui/core";
import { useAtom, useAtomValue } from "jotai";
import CardProductSideBar from "../Cards/ProductSideBar";
import { CartShopAtom } from "@/jotai/cart";
import { MoneyIntl } from "@/utils/formaters";

const cvSideBar = cv({
  base: css`
    z-index: 100;
    flex-direction: column;
    display: none;
    position: fixed;
    justify-content: flex-start;
    top: 0;
    right: 0;
    width: 360px;
    height: 100vh;
    background-color: var(--background-shopping-sidebar-alt);
    border-left: var(--border);
    box-shadow: var(--box-shadow);
    @media (max-width: 768px) {
      width: 100vw;
    }
  `,
  in: css`
    display: flex;
    animation: slideIn 0.2s ease-in-out;
  `,
  out: css`
    display: none;
    animation: slideOut 0.2s ease-in-out;
  `,
});

const SideBarShoppingCart = () => {
  const [modal, setModal] = useAtom(ModalCartAtom);
  const { products, total, taxes, subtotal } = useAtomValue(CartShopAtom);

  return (
    <AtomElement
      as="aside"
      css={cvSideBar({
        in: modal,
        out: !modal,
      })}
    >
      <AtomWrapper
        css={css`
          width: 100%;
          padding: var(--space-large) var(--space-large);
          background-color: var(--background-shopping-sidebar-alt);
          justify-content: flex-start;
          align-items: center;
        `}
      >
        <AtomButton
          onClick={() => setModal(false)}
          astype="outline"
          css={css`
            background-color: var(--background-light) !important;
            border: var(--border) !important;
            padding: var(--space-medium) !important;
            border-radius: 100% !important;
            &:hover {
              i {
                color: var(--color-text) !important;
              }
            }
          `}
        >
          <AtomIcon astheme="alt" icon="arrow-left" />
        </AtomButton>
      </AtomWrapper>
      <AtomWrapper
        css={css`
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
          flex: 1;
          background-color: var(--background-shopping-sidebar);
          box-shadow: var(--box-shadow);
          overflow: hidden;
        `}
      >
        <AtomWrapper
          css={css`
            width: 100%;
            flex-direction: column;
            padding: var(--space-medium);
            gap: var(--space-medium);
            flex: 1;
            overflow: hidden;
          `}
        >
          <AtomWrapper
            css={css`
              width: 100%;
              height: max-content;
              flex-direction: column;
              max-height: 100%;
              padding: var(--space-medium);
              gap: var(--space-medium);
              overflow-y: auto;
              overflow-x: hidden;
            `}
          >
            {products.map((product) => (
              <CardProductSideBar key={product.id} product={product} />
            ))}
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper
          css={css`
            width: 100%;
            flex-direction: column;
            padding: calc(var(--space-medium) * 2);
            border-top: var(--border);
            box-shadow: var(--box-shadow);
            gap: calc(var(--space-medium) * 1.5);
          `}
        >
          <AtomWrapper
            css={css`
              width: 100%;
              flex-direction: column;
              gap: var(--space-small);
            `}
          >
            <AtomWrapper
              css={css`
                width: 100%;
                justify-content: space-between;
                align-items: center;
              `}
            >
              <AtomParagraph
                css={css`
                  width: 100%;
                  font-size: 14px;
                  font-weight: 600;
                  color: var(--color-text);
                `}
              >
                Shipping
              </AtomParagraph>
              <AtomParagraph
                css={css`
                  width: 100%;
                  font-size: 14px;
                  font-weight: 600;
                  color: var(--color-text);
                `}
              >
                $ 200 Express
              </AtomParagraph>
            </AtomWrapper>
            <AtomWrapper
              css={css`
                width: 100%;
                justify-content: space-between;
                align-items: center;
              `}
            >
              <AtomParagraph
                css={css`
                  width: 100%;
                  font-size: 14px;
                  font-weight: 600;
                  color: var(--color-text);
                `}
              >
                Taxes (%13)
              </AtomParagraph>
              <AtomParagraph
                css={css`
                  width: 100%;
                  font-size: 14px;
                  font-weight: 600;
                  color: var(--color-text);
                `}
              >
                {MoneyIntl.format(taxes)}
              </AtomParagraph>
            </AtomWrapper>

            <AtomWrapper
              css={css`
                width: 100%;
                justify-content: space-between;
                align-items: center;
              `}
            >
              <AtomParagraph
                css={css`
                  width: 100%;
                  font-size: 14px;
                  font-weight: 600;
                  color: var(--color-text);
                `}
              >
                Subtotal
              </AtomParagraph>
              <AtomParagraph
                css={css`
                  width: 100%;
                  font-size: 14px;
                  font-weight: 600;
                  color: var(--color-text);
                `}
              >
                {MoneyIntl.format(subtotal)}
              </AtomParagraph>
            </AtomWrapper>
          </AtomWrapper>
          <AtomWrapper
            css={css`
              width: 100%;
              height: 1px;
              background-color: var(--border-color);
            `}
          />
          <AtomWrapper
            css={css`
              width: 100%;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <AtomParagraph
              css={css`
                width: 100%;
                font-size: 14px;
                font-weight: 600;
                color: var(--color-text);
              `}
            >
              Total
            </AtomParagraph>
            <AtomParagraph
              css={css`
                width: 100%;
                font-size: 14px;
                font-weight: 600;
                color: var(--color-text);
              `}
            >
              {MoneyIntl.format(total)}
            </AtomParagraph>
          </AtomWrapper>
          <AtomWrapper
            css={css`
              width: 100%;
              height: 1px;
              background-color: var(--border-color);
            `}
          />
          <AtomButton
            css={css`
              width: 100%;
            `}
          >
            Checkout
          </AtomButton>
        </AtomWrapper>
      </AtomWrapper>
    </AtomElement>
  );
};

export default SideBarShoppingCart;
