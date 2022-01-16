import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Timeline from "components/Timeline/Timeline.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import LanguageIcon from "@material-ui/icons/Language";
import LaptopMacRoundedIcon from "@material-ui/icons/LaptopMacRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import styles from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle.js";
const useStyles = makeStyles(styles);

export default function Careers() {
  const classes = useStyles();

  const stories = [
    {
      // First story
      inverted: true,
      badgeColor: "primary",
      badgeIcon: LaptopMacRoundedIcon,

      title: "Software Engineer -Technology",
      detail: "Larsen & Toubro Infotech",
      titleColor: "white",
      body: (
        <p>
          {" "}
          16 Sep, 2021 - Still.

        </p>
      ),
      footerTitle: (
        <div className={classes.stats} style={{ color: "white" }}>
          {" "}
          <span style={{ position: "relative", top: "4px" }}>
            {" "}
            <LocationOnIcon fontSize="small" />
          </span>
          Hyderabad, India.
        </div>
      ),
    },
    {
      // Second story
      badgeColor: "primary",
      badgeIcon: LanguageIcon,
      title: "Associate Engineer -Technology",
      detail: "Virtusa Consulting Services Pvt Ltd.",
      titleColor: "white",
      body: (
        <p>
          {" "}
          29 May, 2019 -  13 Sep, 2021.
        </p>
      ),
      footerTitle: (
        <div className={classes.stats} style={{ color: "white" }}>
          {" "}
          <span style={{ position: "relative", top: "4px" }}>
            {" "}
            <LocationOnIcon fontSize="small" />
          </span>
          Hyderabad, India.
        </div>
      ),
    },
  ];
  return (
    <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12}>
          <Card plain>
            <CardBody plain>
              <Timeline stories={stories} />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
