import AtomElement from "@/components/atoms/AtomElement";
import CardProduct from "@/components/complex/Cards/Product";
import LayoutHome from "@/components/layouts/Home";
import { IProduct } from "@/types/product";
import { css } from "@kuma-ui/core";

const Products = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = (await response.json()) as IProduct[];
  const dataWithOffer = data.map((product, idx) => {
    if (idx > 5) return { ...product, hasOffer: false, priceOffer: 0 };
    return {
      ...product,
      hasOffer: true,
      priceOffer: product.price - product.price * 0.25,
    };
  });
  return dataWithOffer;
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
          grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-regular);
        `}
      >
        {products?.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </AtomElement>
    </LayoutHome>
  );
};

export default Home;
