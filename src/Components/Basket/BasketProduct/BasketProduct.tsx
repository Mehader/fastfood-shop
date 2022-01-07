import React, { FC } from "react";
import style from "./BasketProduct.module.scss";
import delIcon from "../../../assets/img/delete.svg";
import { IBasketItem } from "../../../types/products";
import {
  addInBasketAC,
  delBasketAC,
  delInBasketAC,
} from "../../../redux/actions/basketAction";
import { Link } from "react-router-dom";

const BasketProduct: FC<IBasketItem> = ({
  id,
  price,
  imgUrl,
  title,
  sumInBasket,
  count,
  dispatch,
  nameMenu,
}) => {
  const obj = {
    id,
    price,
    imgUrl,
    title,
  };

  return (
    <div className={style.itemBox}>
      <div className={style.boxProduct}>
        <img className={style.imgProduct} src={imgUrl} alt="pizza" />
        <Link className={style.linkProd} to={`/product/${nameMenu}`}>
          <div className={style.titleProduct}>{title}</div>
        </Link>
      </div>
      <div className={style.priceProduct}>{price} руб.</div>
      <div>
        <button
          disabled={count === 1 ? true : false}
          onClick={() => dispatch(delInBasketAC(obj))}
          className={style.counterMines}
        >
          -
        </button>
        <span className={style.counterProduct}>{count}</span>
        <button
          onClick={() => dispatch(addInBasketAC(obj))}
          className={style.counterPlus}
        >
          +
        </button>
      </div>
      <div className={style.totalProduct}>{sumInBasket} руб.</div>
      <img
        onClick={() => dispatch(delBasketAC(obj))}
        className={style.removeProduct}
        src={delIcon}
        alt="basketDel"
      />
    </div>
  );
};

export default BasketProduct;
