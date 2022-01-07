import React, { FC, useEffect, useState, MouseEvent, useRef } from "react";
import { ProductItem } from "../";
import style from "./Product.module.scss";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { getArr } from "../../redux/actions/productAction";
import { getParam, getQuerySort } from "../../api";

const Product: FC = () => {
  const prod = useAppSelector((state) => state.productReducer.product);
  const { menu, arrMenuItem } = useAppSelector((state) => state.menuReducer);
  const [sort, setSort] = useState(true);
  const [sortItem, setSortItem] = useState(0);
  const sortRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const arrSortItem: string[] = [
    "Самые дешевые",
    "Самые дорогие",
    "Название от А",
    "Название от Я",
  ];

  useEffect(() => {
    dispatch(getArr(getParam[menu] + getQuerySort[sortItem]));
  }, [menu, sortItem]);

  const removeEvent = (e: any) => {
    if (!e.path.includes(sortRef.current)) setSort(true);
  };

  const handleSortBox = () => {
    setSort(!sort);
    window.document.addEventListener("click", (e: any) => removeEvent(e));
  };

  return (
    <div className={style.product}>
      <div className="container">
        <div className={style.wrapperHeaderProd}>
          <h1>{arrMenuItem[menu]}</h1>

          <div

            onClick={() => handleSortBox()}
            className={sort ? style.boxSort : style.boxSort__show}
          >
            <div>Сортировка:</div>
            <div ref={sortRef} className={style.sortBoxLabel}>
              <div className={style.sort}>{arrSortItem[sortItem]}</div>
              <ul>
                {arrSortItem.map((el: string, index: number) => (
                  <li onClick={() => setSortItem(index)} key={index}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <ul className={style.wrapperProduct}>
          {prod.map((el: any) => (
            <ProductItem
              id={el.id}
              nameMenu={menu}
              key={el.id}
              title={el.title}
              imgUrl={el.imgUrl}
              structure={el.structure}
              price={el.price}
              dispatch={dispatch}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
