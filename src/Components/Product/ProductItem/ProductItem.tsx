import React, { FC } from "react";
import style from "./ProductItem.module.scss";
import { Link } from "react-router-dom";
import { getParam } from "../../../api";
import { useAppSelector } from "../../../redux/store";
import { ICartSmall } from "../../../types/products";
import { basketAC } from "../../../redux/actions/basketAction";

const ProductItem: FC<ICartSmall> = ({
  id,
  nameMenu,
  title,
  imgUrl,
  structure,
  price,
  dispatch,
}) => {
  const itemsBasket = useAppSelector((state) => state.basketReducer.items);

  return (
    <div className={style.productItem}>
      <Link to={`product/${getParam[nameMenu]}/${id}`}>
        <img className={style.img} src={imgUrl} alt="product" />
      </Link>

      <div className={style.title}>{title}</div>
      <div className={style.description}>{structure}</div>
      <div className={style.wrapper}>
        <span className={style.price}>{price} руб.</span>
        {id in itemsBasket ? (
          <span className={style.addProdText}>
            Товар добавлен в <Link to="/cart">корзину</Link>
          </span>
        ) : (
          <button
            onClick={() => dispatch(basketAC(`${getParam[nameMenu]}/${id}`))}
            className={style.btnAddBasket}
          >
            в корзину
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
