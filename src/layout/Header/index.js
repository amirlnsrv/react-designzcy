import React from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/img/logo.png";
import { Button } from "../../components/common/Button";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <header className={classes.header__inner}>
          <img alt="Logo" src={logo} />
          <nav className={classes.nav}>
            <div className={classes.nav__link}>
              <a href="/">Home</a>
            </div>
            <div className={classes.nav__link}>
              <a href="/">Services</a>
            </div>
            <div className={classes.nav__link}>
              <a href="/">Portfolio</a>
            </div>
            <div className={classes.nav__link}>
              <a href="/">Blog</a>
            </div>
          </nav>
          <Button title="Contact us" />
        </header>
      </div>
    </header>
  );
};
