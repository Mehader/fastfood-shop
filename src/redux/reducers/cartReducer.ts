import { ICart, ICartAction, ProductsActionTypes } from "../../types/products";

const initialState: ICart = {
  id: -1,
  title: "",
  carbohydrates: "",
  squirrels: "",
  calories: "",
  fats: "",
  structure: "",
  imgUrl: "",
  price: 0,
};

const cartReducer = (state = initialState, action: ICartAction) => {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS_CART:
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        carbohydrates: action.payload.carbohydrates,
        squirrels: action.payload.squirrels,
        calories: action.payload.calories,
        fats: action.payload.fats,
        structure: action.payload.structure,
        imgUrl: action.payload.imgUrl,
        price: action.payload.price,
      };
    default:
      return state;
  }
};

export default cartReducer;
