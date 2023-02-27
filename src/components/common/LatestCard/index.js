import React from "react";
import classes from "./LatestCard.module.scss";

export const LatestCard = ({ src, title }) => {
  return (
    <div className={classes.latest__card}>
      <div className={classes.latest__img}>
        <img src={src} alt="" />
      </div>
      <p className={classes.latest__title}>{title}</p>
    </div>
  );
};
