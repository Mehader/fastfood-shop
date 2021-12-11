export enum ProductsActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  GET_PRODUCTS_CAT = "GET_PRODUCTS_CAT",
  GET_PRODUCTS_CART = "GET_PRODUCTS_CART",
  ADD_PRODUCTS_BASKET = "ADD_PRODUCTS_BASKET",
  DEL_PRODUCTS_BASKET = "DEL_PRODUCTS_BASKET",
  ADD_PRODUCTS_IN_BASKET = "ADD_PRODUCTS_IN_BASKET",
  DEL_PRODUCTS_IN_BASKET = "DEL_PRODUCTS_IN_BASKET",
  DEL_ALL_PROD_IN_BASKET = "DEL_ALL_PROD_IN_BASKET",
}

export interface IProducts {
  product: any[1];
}

export interface IProductsAction {
  type: string;
  payload: IProducts;
}

export interface IMenuAction {
  type: string;
  payload: number;
}

export interface IMenu {
  menu: number;
  arrMenuItem: string[];
}

export interface ICartAction {
  type: string;
  payload: ICart;
}

export interface ICart {
  id: number;
  title: string;
  carbohydrates: string;
  squirrels: string;
  calories: string;
  fats: string;
  structure: string;
  imgUrl: string;
  price: number;
}

export interface ICartSmall {
  id: string;
  nameMenu: number;
  title: string;
  imgUrl: string;
  structure: string;
  price: number;
  dispatch: any;
}

export interface IBasketItem {
  id: number;
  title: string;
  imgUrl: string;
  price: number;
  sumInBasket?: number;
  count?: number;
  dispatch?: any;
  nameMenu?: string;
}

export interface IBasket {
  items: any;
  counter: number;
  sum: number;
}

export interface IBasketAction {
  type: string;
  payload: any;
}
