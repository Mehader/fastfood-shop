import React, { ChangeEvent, useEffect, useState } from "react";
import style from "./Header.module.scss";
import phoneIcon from "../../assets/img/phone-call.svg";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { getParam } from "../../api";

const Header = () => {
  const prod = useAppSelector((state) => state.productReducer.product);
  const menu = useAppSelector((state) => state.menuReducer.menu);
  const [value, setValue] = useState("");
  const [showHidden, setShowHidden] = useState("none");

  const result =
    value && value != " "
      ? prod.filter((el: any) => el.title.includes(value.toUpperCase()))
      : [];

  const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const hiddenSearchBox = () => {
    setTimeout(() => {
      setShowHidden("none");
    }, 200);
  };

  const showSearchBox = () => {
    setShowHidden("block");
  };

  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <Link className={style.linkCompanyName} to="">
            <div className={style.nameCompany}>
              <div className={style.nameCompany_text__big}>FastFood</div>
              <div className={style.nameCompany_text__small}>
                Магазин доставки еды
              </div>
            </div>
          </Link>
          <div className={style.searchBox}>
            <input
              className={style.search}
              onBlur={() => hiddenSearchBox()}
              onFocus={() => showSearchBox()}
              onChange={(e) => handlerInput(e)}
              autoComplete="off"
              type="search"
              name="search"
              value={value}
              placeholder="Поиск по категории"
            />
            <button disabled={true} className={style.btn}>
              Найти
            </button>
            <div
              style={{ display: showHidden }}
              className={style.resultSearchBox}
            >
              <ul>
                {result.length ? (
                  result.map((result: any) => (
                    <li key={result.id}>
                      <Link
                        onClick={() => setValue("")}
                        to={`product/${getParam[menu]}/${result.id}`}
                      >
                        <span>{result.title}</span>
                        <span>{result.price} руб.</span>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <span>Товар не найден....</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className={style.workTime}>
            <img src={phoneIcon} alt="iconPhone" className={style.iconPhone} />
            <div className={style.timeBox}>
              <span className={style.timeText}>С 09:00 до 22:00</span>
              <span className={style.numberText}>+7(000) 000-00-00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
