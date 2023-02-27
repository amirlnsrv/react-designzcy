import React from "react";
import classes from "./ProvideCard.module.scss";

export const ProvideCard = ({ src, title, subtitle }) => {
  return (
    <div className={classes.provide__card}>
      <div className={classes.provide__img}>
        <img src={src} alt="" />
      </div>
      <p className={classes.provide__title}>{title}</p>
      <p className={classes.provide__subtitle}>{subtitle}</p>
    </div>
  );
};
