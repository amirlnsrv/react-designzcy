import React from "react";
import classes from "./Footer.module.scss";
import logo from "../../assets/img/logo.png";
import img1 from "../../assets/img/Footer/1.png";
import img2 from "../../assets/img/Footer/2.png";
import img3 from "../../assets/img/Footer/3.png";
import img4 from "../../assets/img/Footer/4.png";
import { FooterBtn } from "../../components/common/FooterBtn";
import { FooterCol } from "../../components/common/FooterCol";
import { FooterFooter } from "../../components/common/FooterFooter";
// import { Button } from "../../components/common/Button";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.footer__inner}>
          <div className={classes.footer__left}>
            <div className={classes.footer__logo}>
              <img src={logo} alt="" />
            </div>
            <p className={classes.footer__par}>
              Metairie, 3689 Bassel Street, LA, Louisiana
            </p>
            <p className={classes.footer__par}>Contact us: 225-788-5489</p>
            <div className={classes.footer__btns}>
              <FooterBtn url="https://facebook.com" img={img1} />
              <FooterBtn url="https://instagram.com" img={img2} />
              <FooterBtn url="https://twitter.com" img={img3} />
              <FooterBtn url="https://youtube.com" img={img4} />
            </div>
          </div>
          <div className={classes.footer__cols}>
            <FooterCol
              title="Category"
              link1="/"
              linkTitle1="Home"
              link2="/"
              linkTitle2="About"
              link3="/"
              linkTitle3="Services"
              link4="/"
              linkTitle4="Reviews"
              link5="/"
              linkTitle5="Article"
            />
            <FooterCol
              title="About"
              link1="/"
              linkTitle1="Partners"
              link2="/"
              linkTitle2="Careers"
              link3="/"
              linkTitle3="Press"
              link4="/"
              linkTitle4="Community"
              link5="/"
              linkTitle5="Support"
            />
          </div>
          <div className={classes.footer__right}>
            <p className={classes.footer__title}>Subscribe newsletter</p>
            <p className={classes.footer__subtitle}>
              Sign up for tips, new offers, and exclusive promos.
            </p>
            <form className={classes.footer__form} action="/" method="post">
              <input
                type="text"
                className={classes.footer__input}
                placeholder="Enter your email"
              />
              <input
                className={classes.footer__btn}
                type="submit"
                value="Subcribe"
              />
            </form>
          </div>
        </div>
      </div>
      <FooterFooter />
    </footer>
  );
};
