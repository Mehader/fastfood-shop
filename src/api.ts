import axios from "axios";
import { IProducts } from "./types/products";

export enum getParam {
  "fastfood",
  "pizza",
  "sushi",
  "hotdishes",
}

export enum getQuerySort {
  "?_sort=price&_order=asc",
  "?_sort=price&_order=desc",
  "?_sort=title&_order=asc",
  "?_sort=title&_order=desc",
}

const URL = "http://localhost:3000/";

export async function getProducts(param: string) {
  let response = await axios.get<IProducts>(URL + param);
  return response.data;
}
