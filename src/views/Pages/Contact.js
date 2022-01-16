import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle.js";
const useStyles = makeStyles(styles);

export default function Careers() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <GridContainer direction="column" alignItems="center">
        <GridItem xs={100} sm={20} md={100} lg={20}>
          <a href={"tel:+918978400563"}>
            <Button color="github" style={{ width: "220px" }}>
              <i
                className={
                  classes.socialButtonsIcons +
                  " " +
                  classes.marginRight +
                  " fas fa-mobile-alt"
                }
              />{" "}
              Call Me
            </Button>
          </a>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <a href={"mailto:balvinder1898@gmail.com"}>
            <Button color="github" style={{ width: "220px"}}>
              <i
                className={
                  classes.socialButtonsIcons +
                  " " +
                  classes.marginRight +
                  " fas fa-envelope"
                }
              />{" "}
              Mail Me
            </Button>
          </a>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <a href="https://api.whatsapp.com/send?phone=+918978400563">
            <Button color="github" style={{ width: "220px" }}>
              <i
                className={
                  classes.socialButtonsIcons +
                  " " +
                  classes.marginRight +
                  " fab fa-whatsapp"
                }
              />{" "}
              Whatsapp me
            </Button>
          </a>
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={12} lg={12}>
          <a href="https://localhost:6000/mail">
            <Button color="facebookColor" style={{ width: "220px" }}>
              <i
                className={
                  classes.socialButtonsIcons +
                  " " +
                  classes.marginRight +
                  " fab fa-whatsapp"
                }
              />{" "}
              Form
            </Button>
          </a>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}
