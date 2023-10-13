import AtomButton from "@/components/atoms/AtomButton";
import AtomInput from "@/components/atoms/AtomInput";
import AtomWrapper from "@/components/atoms/AtomWrapper";
import { css } from "@kuma-ui/core";
import Image from "next/image";

const HeaderPublic = () => {
  return (
    <AtomWrapper
      as="nav"
      css={css`
        width: 100%;
        min-height: 60px;
        background-color: var(--background-light);
        border-bottom: var(--border);
        box-shadow: var(--box-shadow);
        position: sticky;
        top: 0;
        padding: 0 1rem;
        justify-content: center;
        align-items: center;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      `}
    >
      <Image
        alt="ChupaPrecios"
        height={60}
        width={140}
        priority
        src="/images/logo.svg"
      />
      <AtomWrapper
        css={css`
          justify-content: center;
          align-items: center;
        `}
      >
        <AtomInput placeholder="Buscar productos" />
      </AtomWrapper>
      <AtomWrapper
        css={css`
          display: flex;
          flex-direction: row;
          gap: 1rem;
          justify-content: flex-end;
        `}
      >
        <AtomButton>Ingresar</AtomButton>
        <AtomButton astype="outline">Iniciar Sesión</AtomButton>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default HeaderPublic;
