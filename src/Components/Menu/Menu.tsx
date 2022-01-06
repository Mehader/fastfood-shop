import React, {FC, RefObject, useEffect, useRef, useState} from "react";
import style from "./Meni.module.scss";
import basketIcon from "../../assets/img/basket-icon.svg";
import sprite from "../../assets/img/social/social.svg";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { menuAC } from "../../redux/actions/menuAction";
import { Link } from "react-router-dom";

const Menu: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { menu, arrMenuItem } = useAppSelector((state) => state.menuReducer);
  const { counter, sum } = useAppSelector((state) => state.basketReducer);

  const menuRef = useRef(null)


  const close = (e: MouseEvent) => {
    if (e.target !== menuRef.current) {
      setMenuOpen(false)
      console.log("sdf")
      document.removeEventListener("click", close)

    }
  }

  const closeMenu = () => {
    if (menuOpen !== false) {
      document.addEventListener("click", close)
    }

  }

useEffect(()=>{
closeMenu()
}, [menuOpen])


  return (
    <div ref={menuRef} className={style.menu}>
      <div className="container">
        <nav className={style.menuBox}>
          <div className={style.socialBox}>
            <svg className={style.iconSocial}>
              <use xlinkHref={`${sprite}#instagram`}></use>
            </svg>
            <svg className={style.iconSocial}>
              <use xlinkHref={`${sprite}#social`}></use>
            </svg>
            <svg className={style.iconSocial}>
              <use xlinkHref={`${sprite}#twitter`}></use>
            </svg>
            <svg className={style.iconSocial}>
              <use xlinkHref={`${sprite}#vk`}></use>
            </svg>
          </div>
          <ul
            className={menuOpen ? style.itemWrapper__open : style.itemWrapper}
          >
            {arrMenuItem.map((el, index) => (
              <li>
                <a
                  key={`${el}_${index}`}
                  onClick={() => dispatch(menuAC(index))}
                  className={
                    index === menu ? style.itemMenu__active : style.itemMenu
                  }
                >
                  {arrMenuItem[index]}
                </a>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className={style.menuIconOpen}
          ></div>
          <Link className={style.linkCart} to="cart">
            <div className={style.basketBox}>
              <img
                className={style.basketIcon}
                src={basketIcon}
                alt="basket-icon"
              />
              <div>
                <div className={style.counterBasket}>Корзина {counter} шт.</div>
                <div className={style.sumBasket}>{sum} руб.</div>
              </div>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
