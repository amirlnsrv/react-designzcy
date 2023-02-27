import React from "react";
import classes from "./FooterBtn.module.scss";

export const FooterBtn = ({ url, img }) => {
  return (
    <div className={classes.footer__btn}>
      <a href={url}>
        <div className={classes.footer__img}>
          <img src={img} alt="" />
        </div>
      </a>
    </div>
  );
};
