import { IProduct } from "@/types/product";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const CartShopStorageAtom = atomWithStorage(
  "CAR_SHOP",
  [] as IProduct[]
);

export const CartShopAtom = atom(
  (get) => {
    const cartShopStorage = get(CartShopStorageAtom);
    return cartShopStorage;
  },
  (get, set, update: ICartShopPayload) => {
    const { type, payload } = update;
    const cartShop = get(CartShopStorageAtom);
    const action =
      ReducerCartShop[type ?? "DEFAULT"] ?? ReducerCartShop.DEFAULT;
    const newState = action(cartShop, payload);
    set(CartShopStorageAtom, newState);
  }
);

type ICartShopPayload = {
  type: "ADD" | "REMOVE" | "CLEAR";
  payload: IProduct;
};

const ReducerCartShop = {
  ADD: (state: IProduct[], payload: IProduct) => {
    const newState = [...state, payload];
    return newState;
  },
  REMOVE: (state: IProduct[], payload: IProduct) => {
    const newState = state.filter((item) => item?.id !== payload?.id);
    return newState;
  },
  CLEAR: () => [] as IProduct[],
  DEFAULT: (state: IProduct[]) => state,
};
