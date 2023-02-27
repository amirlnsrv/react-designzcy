import React from "react";
import classes from "./FooterFooter.module.scss";

export const FooterFooter = () => {
  return (
    <div className={classes.footer__footer}>
	 <div className={classes.footer__line}></div>
      <div className={classes.container}>
        <div className={classes.footer__inner}>
          <p className={classes.footer__copy}>
            © 2021 Designzcy - All rights reserved.
          </p>
          <nav className={classes.footer__nav}>
            <div className={classes.footer__link}>
              <a href="/">Privacy</a>
            </div>
            <div className={classes.footer__link}>
              <a href="/">Security</a>
            </div>
            <div className={classes.footer__link}>
              <a href="/">Terms</a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
