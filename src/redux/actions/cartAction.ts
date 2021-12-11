import { IProductsAction, ProductsActionTypes } from "../../types/products";
import { Dispatch } from "redux";
import { getProducts } from "../../api";

export const getProduct = (param: string) => {
  return async (dispatch: Dispatch<IProductsAction>) => {
    dispatch({
      type: ProductsActionTypes.GET_PRODUCTS_CART,
      payload: await getProducts(param),
    });
  };
};
