import { ProductsActionTypes, IMenu } from "../../types/products";

export const menuAC = (index: number) => ({
  type: ProductsActionTypes.GET_PRODUCTS_CAT,
  payload: index,
});
