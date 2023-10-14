import AtomHeading from "@/components/atoms/AtomHeading";
import AtomParagraph from "@/components/atoms/AtomParagraph";
import LayoutHome from "@/components/layouts/Home";
import { css } from "@kuma-ui/core";
import Link from "next/link";

const NotFound = () => (
  <LayoutHome
    wrapper={{
      css: css`
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        align-items: center;
      `,
    }}
  >
    <AtomHeading>Pagina no encontrada</AtomHeading>
    <AtomParagraph>Lo sentimos, creemos que te has perdido.</AtomParagraph>
    <Link
      href="/"
      className={css`
        font-size: 14px;
        font-weight: 500;
        margin-top: var(--space-regular);
        color: var(--color-primary);
      `}
    >
      Regresar al inicio
    </Link>
  </LayoutHome>
);

export default NotFound;
