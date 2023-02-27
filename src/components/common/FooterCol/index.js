import React from "react";
import classes from "./FooterCol.module.scss";

export const FooterCol = ({
  title,
  link1,
  link2,
  link3,
  link4,
  link5,
  linkTitle1,
  linkTitle2,
  linkTitle3,
  linkTitle4,
  linkTitle5,
}) => {
  return (
    <div className={classes.footer__col}>
      <div className={classes.footer__title}>{title}</div>
      <ul>
        <li>
          <a href={link1}>{linkTitle1}</a>
        </li>
        <li>
          <a href={link2}>{linkTitle2}</a>
        </li>
        <li>
          <a href={link3}>{linkTitle3}</a>
        </li>
        <li>
          <a href={link4}>{linkTitle4}</a>
        </li>
        <li>
          <a href={link5}>{linkTitle5}</a>
        </li>
      </ul>
    </div>
  );
};
