import AtomButton from "@/components/atoms/AtomButton";
import AtomWrapper from "@/components/atoms/AtomWrapper";
import { css } from "@kuma-ui/core";
import Image from "next/image";
import InputSearchProduct from "../Inputs/SearchProduct";
import AtomElement from "@/components/atoms/AtomElement";
import AtomIcon from "@/components/atoms/AtomIcon";
import Link from "next/link";
import ButtonOpenCart from "../Butons/OpenCart";
import ToggleTheme from "../Toggles/Theme";

const HeaderPublic = () => {
  return (
    <AtomElement
      as="nav"
      css={css`
        width: 100%;
        z-index: 100;
        flex-direction: row;
        background-color: var(--background-header);
        border-bottom: var(--border);
        box-shadow: var(--box-shadow);
        position: sticky;
        top: 0;
        padding: 0 var(--space-vertical);
        justify-content: center;
        align-items: center;

        display: grid !important;
        grid-template-areas: "logo search user";
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));

        @media (max-width: 768px) {
          padding: var(--space-vertical);
          grid-template-areas: "logo user" "search search";
          gap: var(--space-medium);
        }
      `}
    >
      <Link href="/">
        <Image
          alt="ChupaPrecios"
          height={60}
          width={140}
          priority
          src="/images/logo.svg"
          className={css`
            mix-blend-mode: var(--mix-blend-mode);
          `}
        />
      </Link>
      <AtomWrapper
        css={css`
          grid-area: search;
          justify-content: center;
          align-items: center;
          @media (max-width: 768px) {
            width: 100%;
          }
        `}
      >
        <InputSearchProduct />
      </AtomWrapper>
      <AtomWrapper
        css={css`
          grid-area: user;
          display: flex;
          flex-direction: row;
          gap: 1rem;
          justify-content: flex-end;
        `}
      >
        <ToggleTheme />
        <AtomButton astype="outline">Ingresar</AtomButton>
        <ButtonOpenCart>
          <AtomIcon icon="shopping-cart" />
        </ButtonOpenCart>
      </AtomWrapper>
    </AtomElement>
  );
};

export default HeaderPublic;
