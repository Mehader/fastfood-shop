import React from "react";
import style from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={style.boxLoading}>
      <div className={style.circle}></div>
    </div>
  );
};

export default Loading;
