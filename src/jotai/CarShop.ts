import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { ProductsAtom } from "./Products";

export const CarShopStorageAtom = atomWithStorage("CAR_SHOP", [] as string[]);

export const CarShopAtom = atom(
  (get) => {
    const products = get(ProductsAtom);
    const carShop = get(CarShopStorageAtom);
    const findProducts = products.filter((product) =>
      carShop.includes(product.id)
    );
    return findProducts;
  },
  (get, set, update: ICarShopPayload) => {
    const { type, payload } = update;
    const carShop = get(CarShopStorageAtom);
    const action = ReducerCarShop[type ?? "DEFAULT"] ?? ReducerCarShop.DEFAULT;
    const newState = action(carShop, payload);
    set(CarShopStorageAtom, newState);
  }
);

type ICarShopPayload = {
  type: "ADD" | "REMOVE" | "CLEAR";
  payload: string;
};

const ReducerCarShop = {
  ADD: (state: string[], payload: string) => {
    const newState = [...state, payload];
    return newState;
  },
  REMOVE: (state: string[], payload: string) => {
    const newState = state.filter((item) => item !== payload);
    return newState;
  },
  CLEAR: () => [] as string[],
  DEFAULT: (state: string[]) => state,
};
