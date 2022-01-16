import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

import Place from "@material-ui/icons/Place";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

import { container } from "assets/jss/material-dashboard-pro-react.js";
import project1 from "assets/img/project1.png";

const useStyles = makeStyles((theme) => ({
  ...styles,
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px",
    },
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  console.log(classes);
  return (
    <div className={classes.container}>
      <SnackbarContent
        message={
          "Project Link will be updated soon, once the maintenance/upgrade is done."
        }
        color="info"
      />
      <br />
      <GridContainer justify="space-evenly">
        <GridItem xs={12} sm={12} md={4} lg={4}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={project1} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                {/* <Tooltip
                  id="tooltip-top"
                  title="View"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="success" simple justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Remove"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip> */}
                <p style={{ color: "red" }}>Link Will be updated soon..</p>
              </div>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Campaign Management
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                The Application is related to Campaigning/Advertising.User can
                make an online request to post their add on places like
                shoppingmalls,busshelters,salons as hoardings.User can be
                charged accordingly to the hoarding size and place. Technologies
                used in Project/App are NextJS, NodeJS, AWS, MongoDB, Redux
                etc..
              </p>
            </CardBody>
            <CardFooter product>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <Place /> Mumbai, India
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4} lg={4}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png"
                  alt="..."
                />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                {/* <Tooltip
                  id="tooltip-top"
                  title="View"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="success" simple justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Remove"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip> */}

                <p style={{ color: "red" }}>Link Will be updated soon..</p>
              </div>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Make A Note
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                This is one of my personal project and also clone of google
                keep. Temporarily the app is under maintance/upgrade, soon it
                will be live. ReactJs, Redux, NodeJs are some of technologies
                used to build the project/app.
              </p>
            </CardBody>
            <CardFooter product>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <Place /> Hyderabad, India.
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
