/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-pro-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { fluid, white, rtlActive } = props;
  var container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white,
  });
  var anchor =
    classes.a +
    cx({
      [" " + classes.whiteColor]: white,
    });
  var block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white,
  });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <div className={classes.left}>
          <List className={classes.list}>
            {/* <ListItem className={classes.inlineBlock}>
              <a href="https://github.com/santhu9550" className={block}>
                <Button justIcon color="white" simple>
                  <i
                    className={
                      classes.socialButtonsIcons +
                      " " +
                      classes.marginRight +
                      " fab fa-github"
                    }
                  />
                </Button>
              </a>
            </ListItem> */}
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.linkedin.com/in/balvinder-singh-624492196/"
                className={block}
              >
                <Button justIcon color="white" simple>
                  <i
                    className={
                      classes.socialButtonsIcons +
                      " " +
                      classes.marginRight +
                      " fab fa-linkedin"
                    }
                  />
                </Button>
              </a>
            </ListItem>
            {/* <ListItem className={classes.inlineBlock}>
              <a href="https://www.facebook.com/santhu.gunda" className={block}>
                <Button justIcon color="white" simple>
                  <i
                    className={
                      classes.socialButtonsIcons +
                      " " +
                      classes.marginRight +
                      " fab fa-facebook-square"
                    }
                  />
                </Button>
              </a>
            </ListItem> */}
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.instagram.com/balvinder___singh/"
                className={block}
              >
                <Button justIcon color="white" simple>
                  <i
                    className={
                      classes.socialButtonsIcons +
                      " " +
                      classes.marginRight +
                      " fab fa-instagram"
                    }
                  />
                </Button>
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          &copy; {1900 + new Date().getYear()}{" "}
          <a href="#" className={anchor} target="_blank">
            @Balvinder Singh,
          </a>
          Hosted on AWS.
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool,
};
