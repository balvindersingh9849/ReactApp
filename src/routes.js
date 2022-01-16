import ErrorPage from "views/Pages/ErrorPage.js";
import Intro from "views/Pages/Intro";
import DateRange from "@material-ui/icons/DateRange";

import Abilities from "views/Pages/Abilities";
import Educations from "views/Pages/Educations";
import Careers from "views/Pages/Careers";
import Projects from "views/Pages/Projects";
import Contact from "views/Pages/Contact";
var dashRoutes = [
  {
    path: "/Intro",
    name: "Intro",
    mini: "I",

    component: Intro,
    layout: "/pages",
  },
  {
    path: "/Careers",
    name: "Careers",
    mini: "C",
    component: Careers,
    layout: "/pages",
  },
  {
    path: "/Educations",
    name: "Educations",
    mini: "E",
    component: Educations,
    layout: "/pages",
  },
  {
    path: "/Projects",
    name: "Projects",
    mini: "P",
    component: Projects,
    layout: "/pages",
  },
  {
    path: "/Contact",
    name: "Contact",
    mini: "CT",
    component: Contact,
    layout: "/pages",
  },
  {
    path: "/error-page",
    name: "Error Page",
    component: ErrorPage,
    layout: "/pages",
  },
  {
    path: "/Abilities",
    name: "Abilities",
    icon: DateRange,
    component: Abilities,
    layout: "/pages",
  },
];
export default dashRoutes;
