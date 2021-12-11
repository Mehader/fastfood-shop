import React from "react";
import style from "./Basket.module.scss";
import { useAppSelector } from "../../redux/store";
import { getSumInBasket } from "../../redux/reducers/basketReducer";
import { delAllProdBasketAC } from "../../redux/actions/basketAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useScrollTop } from "../../hook/scrollToTop";
import { BasketProduct } from "../";

const Basket = () => {
  const { items, sum } = useAppSelector((state) => state.basketReducer);
  const dispatch = useDispatch();

  useScrollTop();

  return (
    <div className={style.basket}>
      <div className="container">
        <div className={style.headerTable}>
          <div className={style.titleTable}>Товар</div>
          <div className={style.titleTable}>Цена</div>
          <div className={style.titleTable}>Кол-во</div>
          <div className={style.titleTable}>Сумма</div>
          <div className={style.titleTable}>Удалить</div>
        </div>
        {sum == 0 ? (
          <div className={style.emptyBasketBox}>
            В корзине пусто <Link to="/">вернуться на главную страницу</Link>
          </div>
        ) : (
          <div className={style.wrapper}>
            {Object.values(items).map((el: any) => (
              <BasketProduct
                key={el[0].id}
                id={el[0].id}
                imgUrl={el[0].imgUrl}
                price={el[0].price}
                title={el[0].title}
                count={el.length}
                nameMenu={el[0].typeProd}
                sumInBasket={getSumInBasket(el)}
                dispatch={dispatch}
              />
            ))}
          </div>
        )}
        <div className={style.boxTotalBasket}>
          {sum == 0 ? (
            <div></div>
          ) : (
            <div
              onClick={() => {
                dispatch(delAllProdBasketAC());
              }}
              className={style.btnClear}
            >
              Очистить корзину
            </div>
          )}
          <div></div>
          <div></div>
          <div className={style.totalSum}>{sum} руб.</div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
