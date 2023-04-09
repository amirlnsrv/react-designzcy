import React from "react";
import classes from "./Latest.module.scss";
import { Title } from "../../common/Title";
import { LatestCard } from "../../common/LatestCard";
import { Button } from "../../common/Button";
import { LatestData } from "./LatestData";

export const Latest = () => {
  return (
    <div className={classes.latest}>
      <Title title="Our Creative Latest Projects" />
      <div className={classes.container}>
        <div className={classes.latest__cards}>
          {LatestData.map((LatestCardData, index) => {
            return (
              <LatestCard
                key={index}
                title={LatestCardData.title}
                src={LatestCardData.img}
              />
            );
          })}
        </div>
        <div className={classes.latest__btn}>
          <Button title="VIEW ALL PROJECTS" />
        </div>
      </div>
    </div>
  );
};
