import React from "react";
import { Button } from "../../common/Button";
import classes from "./Intro.module.scss";
import introImg from "../../../assets/img/intro.png";

export const Intro = () => {
  return (
    <div className={classes.intro}>
      <div className={classes.container}>
        <div className={classes.intro__inner}>
          <div className={classes.intro__text}>
            <h1 className={classes.intro__title}>
              Smart Web <br /> Design Agency
            </h1>
            <p className={classes.intro__subtitle}>
              We will provide best web design and business devlopment <br />{" "}
              service clients expectation and satisfaction guarantee.
            </p>
            <Button className={classes.btn__intro} title={"Free consultation"} />
          </div>
          <div className={classes.intro__img}>
            <img src={introImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
