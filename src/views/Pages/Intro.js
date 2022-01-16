import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CardAvatar from "components/Card/CardAvatar.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import RoundedPic from "components/CustomUpload/PictureUpload";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HomeIcon from "@material-ui/icons/Home";
import Image from "react-bootstrap/Image";
import styles from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle.js";
import profilepic from "assets/img/profilepic.jpg";

const useStyles = makeStyles(styles);

export default function Intro() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={3}>
          <Card plain>
            <CardBody plain>
              <CardAvatar profile>
                <RoundedPic picUrl={profilepic} />
              </CardAvatar>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title} style={{ marginTop: "-25px" }}>
            Balvinder Singh
          </h2>
          <h5 className={classes.description} style={{ marginTop: "-15px" }}>
            Java Developer || AWS 
          </h5>
          <div className={classes.stats}>
            <h5 className={classes.description}>
              {" "}
              <span style={{ position: "relative", top: "3px" }}>
                {" "}
                <LocationOnIcon fontSize="small" />
              </span>
              Hyderabad, India.
            </h5>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
