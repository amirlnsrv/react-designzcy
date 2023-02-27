import React from "react";
import classes from "./Team.module.scss";
import { Title } from "../../common/Title";
import { TeamCard } from "../../common/TeamCard";
import img1 from "../../../assets/img/Team/1.png";
import img2 from "../../../assets/img/Team/2.png";
import img3 from "../../../assets/img/Team/3.png";
import img4 from "../../../assets/img/Team/4.png";

export const Team = () => {
  return (
    <div className={classes.team}>
      <Title title="Meet Our Team" />
      <div className={classes.container}>
        <div className={classes.team__cards}>
          <TeamCard
            src={img1}
            title="Amanda Linda"
            subtitle="Executive officer"
            link="/"
          />
          <TeamCard
            src={img2}
            title="Alex Smith"
            subtitle="UX/UI DESIGNER"
            link="/"
          />
          <TeamCard
            src={img3}
            title="Anthony Fauci"
            subtitle="Web Developer"
            link="/"
          />
          <TeamCard
            src={img4}
            title="Khalid Abbed"
            subtitle="Head of Markter"
            link="/"
          />
        </div>
      </div>
    </div>
  );
};
