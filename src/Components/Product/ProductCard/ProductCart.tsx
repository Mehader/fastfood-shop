import React, { useEffect, useState } from "react";
import style from "./ProductCart.module.scss";
import { useAppSelector } from "../../../redux/store";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { basketAC } from "../../../redux/actions/basketAction";
import { useScrollTop } from "../../../hook/scrollToTop";
import { getProduct } from "../../../redux/actions/cartAction";
import { Loading } from "../../";

const ProductCart = () => {
  const paramProduct = useAppSelector((state) => state.cartReducer);
  const basketProd = useAppSelector((state) => state.basketReducer.items);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const prodNameId = `${path[2]}/${path[3]}`;

  useEffect(() => {
    dispatch(getProduct(prodNameId));
    setTimeout(() => setIsLoading(false), 400);
  }, []);

  useScrollTop();

  return (
    <>
      {isLoading && paramProduct ? (
        <Loading />
      ) : (
        <div className={style.productCart}>
          <div className="container">
            <h1>{paramProduct.title}</h1>
            <div className={style.wrapper}>
              <div className={style.imgBox}>
                <img
                  className={style.imgProd}
                  src={paramProduct.imgUrl}
                  alt="pizza"
                />
              </div>
              <div className={style.descBox}>
                <table>
                  <tr>
                    <td className={style.descColumn}>Углеводы</td>
                    <td>{paramProduct.carbohydrates}</td>
                  </tr>
                  <tr>
                    <td className={style.descColumn}>Белки</td>
                    <td>{paramProduct.squirrels}</td>
                  </tr>
                  <tr>
                    <td className={style.descColumn}>Калории</td>
                    <td>{paramProduct.calories}</td>
                  </tr>
                  <tr>
                    <td className={style.descColumn}>Жиры</td>
                    <td>{paramProduct.fats}</td>
                  </tr>
                  <tr>
                    <td className={style.descColumn}>Состав</td>
                    <td>{paramProduct.structure}</td>
                  </tr>
                </table>
                {paramProduct.id in basketProd ? (
                  <span className={style.addProdText}>
                    Товар добавлен в <Link to="/cart">корзину</Link>
                  </span>
                ) : (
                  <div className={style.wrapperPriceAdd}>
                    <span className={style.price}>
                      {paramProduct.price} руб.
                    </span>

                    <div className={style.counterBox}>
                      <button
                        onClick={() => dispatch(basketAC(prodNameId))}
                        className={style.button}
                      >
                        в корзину
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCart;
