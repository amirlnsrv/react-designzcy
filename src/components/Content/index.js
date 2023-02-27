import React from "react";
import classes from "./Content.module.scss";
// import { Button } from "../common/Button";
import { Intro } from "./Intro/Intro";
import { Provide } from "./Provide";
import { Offering } from "./Offering";
// import { Link } from "react-router-dom";
import { Latest } from "./Latest";
import { Team } from "./Team";

export const Content = () => {
  return (
    <div className={classes.content}>
      <div className={classes.container}>
        <Intro />
        <Provide />
        <Offering />
        <Latest />
        <Team />
        {/* <Button title="Amir" />
        <Button title="Nurbol" />
        <Link to="/">home</Link>
        <Link to="admin">admin</Link> */}
      </div>
    </div>
  );
};
