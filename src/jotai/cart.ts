import { IProducStorage, IProduct } from "@/types/product";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

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
    const subtotal = products.reduce(
      (acc, curr) =>
        acc + (curr.hasOffer ? curr.priceOffer : curr.price) * curr.quantity,
      0
    );

    const taxes = subtotal * 0.13 + 200;
    const total = subtotal + taxes;

    return {
      storage,
      products,
      total,
      subtotal,
      taxes,
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

export type ICartShopType = "ADD" | "REMOVE" | "CLEAR";

type ICartShopPayload = {
  type: ICartShopType;
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
