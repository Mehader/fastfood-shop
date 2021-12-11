import { IMenu, IMenuAction, ProductsActionTypes } from "../../types/products";

const initialState: IMenu = {
  menu: 0,
  arrMenuItem: ["Бургеры", "Пицца", "Суши и роллы", "Супы"],
};

const menuReducer = (state = initialState, action: IMenuAction): IMenu => {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS_CAT:
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;
