import React from "react";
import classes from "./Title.module.scss";

export const Title = ({ title }) => {
  return <h2 className={classes.title}>{title}</h2>;
};
