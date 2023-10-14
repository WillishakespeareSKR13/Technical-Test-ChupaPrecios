import { faker } from "@faker-js/faker";

export type IProduct = {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  stock: number;
  category: string;
  createdAt: string;
  updatedAt: string;
};

const generateRandomProduct = (id: number): IProduct => {
  const productName = faker.commerce.productName();
  const productPrice = faker.commerce.price();
  const productImage = faker.image.urlLoremFlickr({
    category: "technics",
  });
  const productDescription = faker.commerce.productDescription();
  const productStock = faker.number.int();
  const productCategory = faker.commerce.department();
  const createdAt = faker.date.past().toISOString();
  const updatedAt = faker.date.recent().toISOString();

  return {
    id: id.toString(),
    name: productName,
    price: productPrice,
    image: productImage,
    description: productDescription,
    stock: productStock,
    category: productCategory,
    createdAt,
    updatedAt,
  };
};

export const PRODUCTS: IProduct[] = Array.from({ length: 100 }, (_, i) =>
  generateRandomProduct(i + 1)
);
