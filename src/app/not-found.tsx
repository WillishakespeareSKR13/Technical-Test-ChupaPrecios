import AtomHeading from "@/components/atoms/AtomHeading";
import AtomText from "@/components/atoms/AtomText";
import LayoutHome from "@/components/layouts/Home";
import { css } from "@kuma-ui/core";

const NotFound = () => (
  <LayoutHome
    wrapper={{
      css: css`
        justify-content: center;
        align-items: center;
      `,
    }}
  >
    <AtomHeading>Pagina no encontrada</AtomHeading>
    <AtomText>No se ha encontrado la pagina que buscas</AtomText>
  </LayoutHome>
);

export default NotFound;
