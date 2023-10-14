import { IProduct } from "@/types/product";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type IProductWithQuantity = IProduct & { quantity: number };
type IProducStorage = Record<string, IProductWithQuantity>;

export const CartShopStorageAtom = atomWithStorage(
  "CAR_SHOP",
  {} as IProducStorage
);

export const CartShopAtom = atom(
  (get) => {
    const storage = get(CartShopStorageAtom);
    const products = Object.values(storage) ?? [];
    const quantity = products.reduce((acc, curr) => acc + curr.quantity, 0);
    const findProduct = (id: number) => storage[id];
    return {
      storage,
      products,
      quantity,
      findProduct,
    };
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
  ADD: (state: IProducStorage, payload: IProduct) => {
    const isExist = state[payload?.id];
    if (!isExist)
      return { ...state, [payload?.id]: { ...payload, quantity: 1 } };

    const addQuantity = {
      ...state,
      [payload?.id]: {
        ...state[payload?.id],
        quantity: state[payload?.id].quantity + 1,
      },
    };

    return addQuantity;
  },
  REMOVE: (state: IProducStorage, payload: IProduct) => {
    const hasDelete = state[payload?.id]?.quantity === 1;
    if (hasDelete) {
      const { [payload?.id]: _, ...newState } = state;
      return newState;
    }

    return {
      ...state,
      [payload?.id]: {
        ...state[payload?.id],
        quantity: state[payload?.id].quantity - 1,
      },
    };
  },
  CLEAR: () => ({} as IProducStorage),
  DEFAULT: (state: IProducStorage) => state,
};
