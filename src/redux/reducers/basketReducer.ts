import {
  IBasket,
  IBasketAction,
  IBasketItem,
  ProductsActionTypes,
} from "../../types/products";

const initialState: IBasket = {
  items: {},
  counter: 0,
  sum: 0,
};

const basketReducer = (
  state = initialState,
  action: IBasketAction
): IBasket => {
  switch (action.type) {
    // добавить товар в корзину
    case ProductsActionTypes.ADD_PRODUCTS_BASKET:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]:
            action.payload.id in state.items
              ? [...state.items[action.payload.id], action.payload]
              : [
                  {
                    ...action.payload,
                    sumInBasket: action.payload.price,
                    typeProd: action.payload.typeProd,
                  },
                ],
        },

        counter: state.counter + 1,
        sum: state.sum + action.payload.price,
      };

    // удалить из корзины товар
    case ProductsActionTypes.DEL_PRODUCTS_BASKET:
      const sumCollectionProduct = getSumInBasket(
        state.items[action.payload.id]
      );
      const counterCollectionProduct = state.items[action.payload.id].length;
      delete state.items[action.payload.id];
      return {
        ...state,
        counter: state.counter - counterCollectionProduct,
        sum: state.sum - sumCollectionProduct,
      };

    // увеличить кол-во текущего товара в корзине
    case ProductsActionTypes.ADD_PRODUCTS_IN_BASKET:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: [
            ...state.items[action.payload.id],
            action.payload,
          ],
        },
        counter: state.counter + 1,
        sum: state.sum + action.payload.price,
      };

    // убавить кол-во текущего товара в корзине
    case ProductsActionTypes.DEL_PRODUCTS_IN_BASKET:
      if (state.items[action.payload.id].length != 1)
        state.items[action.payload.id].splice(0, 1);
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: [...state.items[action.payload.id]],
        },
        counter: state.counter - 1,
        sum: state.sum - action.payload.price,
      };

    // убавить кол-во текущего товара в корзине
    case ProductsActionTypes.DEL_ALL_PROD_IN_BASKET:
      return {
        ...state,
        items: {},
        counter: 0,
        sum: 0,
      };

    default:
      return state;
  }
};

// функция для вычисления суммы в коллекции товара
export const getSumInBasket = (el: Array<IBasketItem>) => {
  let sum = 0;
  for (let i = 0; i < el.length; i++) {
    sum += el[i].price;
  }
  return sum;
};

export default basketReducer;
