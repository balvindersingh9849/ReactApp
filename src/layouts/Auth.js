import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footer/Footer.js";

import routes from "routes.js";
import sanbg from "assets/img/sanbg.jpg";
import styles from "assets/jss/material-dashboard-pro-react/layouts/authStyle.js";

const useStyles = makeStyles(styles);

export default function Pages(props) {
  const { ...rest } = props;
  // ref for the wrapper div
  const wrapper = React.createRef();
  // styles
  const classes = useStyles();
  React.useEffect(() => {
    document.body.style.overflow = "unset";
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/pages") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  // https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ
  const getBgImage = () => {
    if (window.location.pathname.indexOf("/pages/Careers") !== -1) {
      return "https://wallpaperaccess.com/full/1393388.jpg";
    } else if (window.location.pathname.indexOf("/pages/Educations") !== -1) {
      return "https://wallpaperaccess.com/full/1393388.jpg";
    } else if (window.location.pathname.indexOf("/pages/Intro") !== -1) {
      return sanbg;
    } else if (window.location.pathname.indexOf("/pages/Projects") !== -1) {
      return "https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ";
    } else if (window.location.pathname.indexOf("/pages/Abilities") !== -1) {
      return "https://www.wallpapertip.com/wmimgs/83-838362_web-developer.jpg";
    } else if (window.location.pathname.indexOf("/pages/Contact") !== -1) {
      return sanbg;
    }
  };
  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name.toUpperCase();
        }
      }
    }
    return activeRoute;
  };
  return (
    <div>
      <AuthNavbar brandText={getActiveRoute(routes)} {...rest} />
      <div className={classes.wrapper} ref={wrapper}>
        <div
          className={classes.fullPage}
          style={{
            backgroundImage: "url(" + getBgImage() + ")",
          }}
        >
          <Switch>{getRoutes(routes)}</Switch>
          <Redirect from="/pages" to="/pages/Intro" />
          <Footer white />
        </div>
      </div>
    </div>
  );
}
