import AtomElement from "@/components/atoms/AtomElement";
import AtomText from "@/components/atoms/AtomText";
import AtomWrapper from "@/components/atoms/AtomWrapper";
import { css } from "@kuma-ui/core";
import Image from "next/image";
import Link from "next/link";

const FooterPublic = () => {
  return (
    <AtomElement
      as="footer"
      css={css`
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: var(--background-dark);
      `}
    >
      <AtomElement
        as="section"
        css={css`
          width: 100%;
          flex-direction: column;
          padding: var(--space-padding);
          gap: var(--space-regular);
          max-width: var(--max-content-width);
        `}
      >
        <AtomWrapper
          css={css`
            width: 100%;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: var(--space-regular);
          `}
        >
          <AtomText
            astheme="alt"
            css={css`
              font-weight: 700 !important;
              font-size: 12px;
              white-space: nowrap;
              text-transform: uppercase;
            `}
          >
            Métodos de pago
          </AtomText>
        </AtomWrapper>
        <AtomWrapper
          css={css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: var(--space-medium);
            justify-content: space-between;
            align-items: center;
          `}
        >
          {MethodImages?.map((method) => (
            <AtomWrapper
              key={method.id}
              css={css`
                display: flex;
                width: max-content;
                height: 100%;
                align-items: center;
                justify-content: center;
                img {
                  object-fit: contain;
                  opacity: 0.4;
                }
              `}
            >
              <Image width={65} height={45} alt={method.alt} src={method.src} />
            </AtomWrapper>
          ))}
        </AtomWrapper>
      </AtomElement>

      <AtomWrapper
        css={css`
          display: flex;
          width: 100%;
          background-color: var(--background-alt);
          padding: 14px 0;
        `}
      >
        <AtomText
          astheme="alt"
          css={css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
            align-items: center;
            gap: var(--space-small);
            font-weight: 700 !important;
            font-size: 14px !important;
            b {
              opacity: 0.6;
            }
          `}
        >
          Copyright © <FooterLinkSmall /> all rights reserved. Powered by
          <FooterLinkSmall />
        </AtomText>
      </AtomWrapper>
    </AtomElement>
  );
};

export default FooterPublic;

const FooterLinkSmall = () => (
  <Link href="/">
    <AtomElement as="b">Chupaprecios</AtomElement>
  </Link>
);

const MethodImages = [
  {
    id: "visa",
    src: "/images/pay-methods/visa.png",
    alt: "Visa",
  },
  {
    id: "master",
    src: "/images/pay-methods/master.png",
    alt: "MasterCard",
  },
  {
    id: "american",
    src: "/images/pay-methods/american.png",
    alt: "American Express",
  },
  {
    id: "paypal",
    src: "/images/pay-methods/paypal.png",
    alt: "Paypal",
  },
  {
    id: "oxxo",
    src: "/images/pay-methods/oxxo.png",
    alt: "Oxxo",
  },
  {
    id: "spei",
    src: "/images/pay-methods/spei.png",
    alt: "SPEI",
  },
];
