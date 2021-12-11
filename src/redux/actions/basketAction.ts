import {
  IBasketAction,
  IBasketItem,
  ProductsActionTypes,
} from "../../types/products";
import { Dispatch } from "redux";
import { getProducts } from "../../api";

export const basketAC = (param: string) => {
  return async (dispatch: Dispatch<IBasketAction>) => {
    dispatch({
      type: ProductsActionTypes.ADD_PRODUCTS_BASKET,
      payload: { ...(await getProducts(param)), typeProd: param },
    });
  };
};

export const addInBasketAC = (obj: IBasketItem) => ({
  type: ProductsActionTypes.ADD_PRODUCTS_IN_BASKET,
  payload: obj,
});

export const delInBasketAC = (obj: IBasketItem) => ({
  type: ProductsActionTypes.DEL_PRODUCTS_IN_BASKET,
  payload: obj,
});

export const delBasketAC = (obj: IBasketItem) => ({
  type: ProductsActionTypes.DEL_PRODUCTS_BASKET,
  payload: obj,
});

export const delAllProdBasketAC = () => ({
  type: ProductsActionTypes.DEL_ALL_PROD_IN_BASKET,
});
