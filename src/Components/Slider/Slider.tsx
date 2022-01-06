import React from "react";
import style from "./Slider.module.scss";
import { Menu } from "../";
import arrow from "../../assets/img/arrow.svg";
import { useAppSelector } from "../../redux/store";
import slider1 from "../../assets/img/slider/slider1.webp";
import slider3 from "../../assets/img/slider/slider3.webp";
import slider4 from "../../assets/img/slider/slider4.webp";
import slider5 from "../../assets/img/slider/slider5.jpg";
import { useDispatch } from "react-redux";
import { menuAC } from "../../redux/actions/menuAction";

const Slider = () => {

  const menu = useAppSelector((state) => state.menuReducer.menu);
  const arrImgSlider: string[] = [slider1, slider3, slider4, slider5];
  const dispatch = useDispatch();



  return (
    <div className={style.slider}>
      <div className={style.sliderBox}>
        <div
          style={{backgroundImage: `url(${arrImgSlider[menu]})`}}
          className={style.sliderItem}
        >

          <Menu />
          <div className={style.wrapperCounter}>
            <div className={style.counterBox}>
              <button
                onClick={() => dispatch(menuAC(menu + 1 <= 1 ? 3 : menu - 1))}
                className={style.arrowBtn}
              >
                <img
                  className={style.arrowIconLeft}
                  src={arrow}
                  alt="arrow-right"
                />
              </button>
              <div className={style.counter}>
                <span className={style.counter__red}>{menu + 1}</span>/
                {arrImgSlider.length}
              </div>
              <button
                onClick={() =>
                  dispatch(
                    menuAC(menu + 1 < arrImgSlider.length ? menu + 1 : 0)
                  )
                }
                className={style.arrowBtn}
              >
                <img
                  className={style.arrowIconRight}
                  src={arrow}
                  alt="arrow-right"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
