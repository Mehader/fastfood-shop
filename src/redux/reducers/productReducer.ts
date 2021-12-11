import {
  IProducts,
  IProductsAction,
  ProductsActionTypes,
} from "../../types/products";

const initialState: IProducts = {
  product: [],
};

const productReducer = (
  state = initialState,
  action: IProductsAction
): IProducts => {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
