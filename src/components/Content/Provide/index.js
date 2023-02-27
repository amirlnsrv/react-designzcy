import React from "react";
import { ProvideCard } from "../../common/ProvideCard";
import { Title } from "../../common/Title";
import classes from "./Provide.module.scss";
import img1 from "../../../assets/img/Provide/1.png";
import img2 from "../../../assets/img/Provide/2.png";
import img3 from "../../../assets/img/Provide/3.png";

export const Provide = () => {
  return (
    <div className={classes.provide}>
      <Title title="We Provide the Best Web services" />
      <div className={classes.container}>
        <div className={classes.provide__cards}>
          <ProvideCard src={img1} title="5200+" subtitle="Projects completed" />
          <ProvideCard src={img2} title="500+" subtitle="Active clients" />
          <ProvideCard src={img3} title="4500+" subtitle="Happy clients" /> 
        </div>
      </div>
    </div>
  );
};
