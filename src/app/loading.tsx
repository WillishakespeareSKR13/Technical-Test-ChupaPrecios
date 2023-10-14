import AtomElement from "@/components/atoms/AtomElement";
import LayoutHome from "@/components/layouts/Home";
import { css } from "@kuma-ui/core";

const Home = () => (
  <LayoutHome>
    <AtomElement
      as="section"
      css={css`
        display: grid !important;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: var(--space-padding);
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      `}
    >
      CARGANDO
    </AtomElement>
  </LayoutHome>
);

export default Home;
