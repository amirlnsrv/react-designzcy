import React from "react";
import { Title } from "../../common/Title";
import { OfferingCard } from "../../common/OfferingCard";
import { OfferingCardRed } from "../../common/OfferingCardRed";
import classes from "./Offering.module.scss";
import img1 from "../../../assets/img/Offering/1.png";
import img2 from "../../../assets/img/Offering/2.png";
import nextRed from "../../../assets/img/Offering/nextRed.png";
import img3 from "../../../assets/img/Offering/3.png";
import next from "../../../assets/img/Offering/next.png";

export const Offering = () => {
  return (
    <div className={classes.offering}>
      <Title title="What Service We’re Offering" />
      <div className={classes.container}>
        <div className={classes.offering__cards}>
          <OfferingCard
            src={img1}
            title="Website design"
            subtitle="Need something changed or is there something not quite working the best service"
            icon={next}
          />
          <OfferingCardRed
            src={img2}
            title="Website design"
            subtitle="Need something changed or is there something not quite working the best service"
            icon={nextRed}
          />
          <OfferingCard
            src={img3}
            title="Website design"
            subtitle="Need something changed or is there something not quite working the best service"
            icon={next}
          />
        </div>
      </div>
    </div>
  );
};
