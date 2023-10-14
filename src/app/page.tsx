import AtomElement from "@/components/atoms/AtomElement";
import CardProduct from "@/components/complex/Cards/Product";
import LayoutHome from "@/components/layouts/Home";
import { IProduct, PRODUCTS } from "@/constants/product";
import { css } from "@kuma-ui/core";

const Products = async () => {
  const PromiseProducts = new Promise<IProduct[]>((resolve) => {
    // setTimeout(() => {
    //   resolve(PRODUCTS);
    // }, 2000);
    resolve(PRODUCTS);
  });
  const response = await PromiseProducts;
  return response;
};

const Home = async () => {
  const products = await Products();
  return (
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
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-regular);
        `}
      >
        {products?.map((item) => (
          <CardProduct key={item.id} {...item} />
        ))}
      </AtomElement>
    </LayoutHome>
  );
};

export default Home;
