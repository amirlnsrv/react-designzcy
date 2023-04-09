import React from "react";
import classes from "./Team.module.scss";
import { Title } from "../../common/Title";
import { TeamCard } from "../../common/TeamCard";
import { TeamCardsData } from "./TeamCardsData";

export const Team = () => {
  return (
    <div className={classes.team}>
      <Title title="Meet Our Team" />
      <div className={classes.container}>
        <div className={classes.team__cards}>
          {TeamCardsData.map((TeamCardData, index) => {
            return (
              <TeamCard
                key={index}
                src={TeamCardData.img}
                title={TeamCardData.title}
                subtitle={TeamCardData.subtitle}
                link="/"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
