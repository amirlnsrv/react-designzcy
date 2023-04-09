import React from "react";
import classes from "./TeamCard.module.scss";
import ico1 from "../../../assets/img/Team/ico1.png";
import ico2 from "../../../assets/img/Team/ico2.png";
import ico3 from "../../../assets/img/Team/ico3.png";

export const TeamCard = ({ src, title, subtitle, link }) => {
  return (
    <div className={classes.team__card}>
      <div className={classes.team__img}>
        <img src={src} alt="" />
      </div>
      <div className={classes.team__content}>
        <p className={classes.team__title}>{title}</p>
        <p className={classes.team__subtitle}>{subtitle}</p>
        <div className={classes.team__btns}>
          <div className={classes.team__btn}>
            <a href={link}>
              <img src={ico1} alt="" />
            </a>
          </div>
          <div className={classes.team__btn}>
            <a href={link}>
              <img src={ico2} alt="" />
            </a>
          </div>
          <div className={classes.team__btn}>
            <a href={link}>
              <img src={ico3} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
