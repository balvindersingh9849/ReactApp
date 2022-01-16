import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import Timeline from "components/Timeline/Timeline.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import LanguageIcon from "@material-ui/icons/Language";
import LaptopMacRoundedIcon from "@material-ui/icons/LaptopMacRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import styles from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle.js";
const useStyles = makeStyles(styles);

export default function Educations() {
  const classes = useStyles();

  const stories = [
    {
      // First story
      inverted: true,
      badgeColor: "primary",
      badgeIcon: LanguageIcon,
      title: "Full MERN Stack Development Course.",
      detail: "App Brewery    (Dec 2018 - Jan 2019)",
      titleColor: "white",
      body: (
        <p>
          {" "}
          This course thought me about the mechanisms of web development,Where I
          learned about web development, user experience and design. During the
          course, I specialized in ReactJS, Redux, NodeJS, MongoDB.{" "}
        </p>
      ),
      footerTitle: (
        <div className={classes.stats} style={{ color: "white" }}>
          {" "}
          <span style={{ position: "relative", top: "4px" }}>
            {" "}
            <LocationOnIcon fontSize="small" />
          </span>
          Online.
        </div>
      ),
    },
    {
      // Second story
      badgeColor: "primary",
      badgeIcon: LaptopMacRoundedIcon,
      title: "Java Crash Course.",
      detail: "ABC For Tech (Jan 2019 - Mar 2019)",
      titleColor: "white",
      body: (
        <p>
          {" "}
          This course thought me about the Java Technology,Where I learned core
          concepts of Java, MySql....
        </p>
      ),
      footerTitle: (
        <div className={classes.stats} style={{ color: "white" }}>
          {" "}
          <span style={{ position: "relative", top: "4px" }}>
            {" "}
            <LocationOnIcon fontSize="small" />
          </span>
          Bengaluru, India.
        </div>
      ),
    },
    {
      // Third story
      inverted: true,
      badgeColor: "primary",
      badgeIcon: SchoolRoundedIcon,
      title: "Bachelor Degree- b-tech (CSE).",
      detail: "Guru Nanak Institutions Technical Campus  (2015 - 2019)",
      titleColor: "white",
      body: (
        <p>
          {" "}
          The education was mainly civil construction & planning, Where I
          learned concepts of Surveying, Structural Analysis, Transportation,
          Geology, Hydraulics etc..
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
      // Fourth story
      badgeColor: "primary",
      badgeIcon: SchoolRoundedIcon,
      title: "High School (10+2).",
      detail: "Alphores Institutions (Apr 2015)",
      titleColor: "warning",
      body: (
        <p>
          I graduated highschool, where I enjoyed doing science, math, biology,
          physics and chemistry.
        </p>
      ),
      footerTitle: (
        <div className={classes.stats} style={{ color: "white" }}>
          {" "}
          <span style={{ position: "relative", top: "4px" }}>
            {" "}
            <LocationOnIcon fontSize="small" />
          </span>
          karimnagar-TS, India.
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
