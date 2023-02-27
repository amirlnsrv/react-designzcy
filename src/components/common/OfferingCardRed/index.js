import React from "react";
import classes from "./OfferingCardRed.module.scss";

export const OfferingCardRed = ({ src, title, subtitle, icon }) => {
  return (
    <div className={classes.offering__card}>
      <div className={classes.offering__inner}>
        <div className={classes.offering__img}>
          <img src={src} alt="" />
        </div>
        <p className={classes.offering__title}>{title}</p>
        <p className={classes.offering__subtitle}>{subtitle}</p>
        <div className={classes.offering__btn}>
          <a href="/">
            <img src={icon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
