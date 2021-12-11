import { getProducts } from "../../api";
import { IProductsAction, ProductsActionTypes } from "../../types/products";
import { Dispatch } from "redux";

export const getArr = (param: string) => {
  return async (dispatch: Dispatch<IProductsAction>) => {
    dispatch({
      type: ProductsActionTypes.GET_PRODUCTS,
      payload: await getProducts(param),
    });
  };
};
