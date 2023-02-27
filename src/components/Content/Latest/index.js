import React from "react";
import classes from "./Latest.module.scss";
import { Title } from "../../common/Title";
import { LatestCard } from "../../common/LatestCard";
import { Button } from "../../common/Button";
import img1 from "../../../assets/img/Latest/1.jpg";
import img2 from "../../../assets/img/Latest/2.jpg";
import img3 from "../../../assets/img/Latest/3.jpg";
import img4 from "../../../assets/img/Latest/4.jpg";
import img5 from "../../../assets/img/Latest/5.jpg";
import img6 from "../../../assets/img/Latest/6.jpg";

export const Latest = () => {
  return (
    <div className={classes.latest}>
      <Title title="Our Creative Latest Projects" />
      <div className={classes.container}>
        <div className={classes.latest__cards}>
          <LatestCard title="Business Consultant Landing Page" src={img1} />
          <LatestCard title="Food delivery Web Design" src={img2} />
          <LatestCard title="BusMessenger landing Page" src={img3} />
          <LatestCard title="Doctor’s Consultant Landing Page" src={img4} />
          <LatestCard title="e-Leraning Web Design" src={img5} />
          <LatestCard title="Job Finder landing Page" src={img6} />
        </div>
        <div className={classes.latest__btn}>
          <Button title="VIEW ALL PROJECTS" />
        </div>
      </div>
    </div>
  );
};
