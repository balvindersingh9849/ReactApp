import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import Box from "@material-ui/core/Box";
import Table from "components/Table/Table.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Rating from "@material-ui/lab/Rating";
import styles from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle.js";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);
const StyledRating = withStyles({
  icon: {
    color: "rgb(255,255,255,0.6)",
  },
  iconFilled: {
    color: "#ffb900",
  },
})(Rating);

export default function Abilities() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} lg={12} md={12}>
          <Card plain>
            <CardBody plain>
              <GridContainer justify="space-evenly">
                <GridItem xs={12} sm={12} lg={8} md={8}>
                  {" "}
                  <Box
                    border="1px solid rgb(255,255,255,.5)"
                    borderRadius={16}
                    style={{ padding: "25px", marginBottom: "30px" }}
                  >
                    <h4 style={{ color: "white", textAlign: "center" }}>
                      Skills
                    </h4>
                    <GridContainer justify="space-evenly">
                      <GridItem xs={12} sm={12} lg={6} md={6}>
                        <Table
                          hover={true}
                          tableHeaderColor="warning"
                          tableData={[
                            [
                              "Java",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="4.5"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "MicroServices",
                              <StyledRating
                                key={2}
                                name="read-only"
                                value="3.5"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "Hibernate",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="3.5"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "Docker",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="4"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "Express (NodeJS)",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="4"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "MongoDb",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="4"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "BootStrap Framework",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="4.5"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "JQuery",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="4"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "JSON",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="3.5"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "Auth0",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="3"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "EJS",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="3.5"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                          ]}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} lg={6} md={6}>
                        {" "}
                        <Table
                          hover={true}
                          tableHeaderColor="warning"
                          tableData={[
                            [
                              "Spring Boot",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="4.5"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "REST (REpresentational State Transfer",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="3.5"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "Kubernets",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="3.5"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "MySql",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="2.5"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "Python",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="2.5"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "selenium",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="4"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "C",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="2.5"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "Angular",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="2"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "Command Line Interface",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="3"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "Aws(Cognito/S3/SES/SNS)",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="3.5"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                            [
                              "Ionic Framework",
                              <StyledRating
                                key={1}
                                name="read-only"
                                value="3"
                                readOnly
                                size="small"
                                precision={0.5}
                              />,
                            ],
                          ]}
                        />
                      </GridItem>
                    </GridContainer>
                  </Box>
                </GridItem>
                <GridItem xs={12} sm={12} lg={4} md={4}>
                  {" "}
                  <Box
                    border="1px solid rgb(255,255,255,.5)"
                    borderRadius={16}
                    style={{ padding: "25px" }}
                  >
                    <h4 style={{ color: "white", textAlign: "center" }}>
                      Tools
                    </h4>
                    <Table
                      hover={true}
                      tableHeaderColor="warning"
                      tableData={[
                        [
                          "Visual Studio",
                          <StyledRating
                            key={1}
                            name="read-only"
                            value="4.5"
                            readOnly
                            size="small"
                            precision={0.5}
                          />,
                        ],
                        [
                          "Git",
                          <StyledRating
                            key={1}
                            name="read-only"
                            value="3"
                            readOnly
                            size="small"
                            precision={0.5}
                          />,
                        ],
                        [
                          "Atlassian(Jira/Bit Bucket)",
                          <StyledRating
                            key={1}
                            name="read-only"
                            value="3"
                            readOnly
                            size="small"
                            precision={0.5}
                          />,
                        ],
                        [
                          "Github",
                          <StyledRating
                            key={1}
                            name="read-only"
                            value="4"
                            readOnly
                            size="small"
                            precision={0.5}
                          />,
                        ],
                        [
                          "Atom",
                          <StyledRating
                            key={1}
                            name="read-only"
                            value="4"
                            readOnly
                            size="small"
                            precision={0.5}
                          />,
                        ],
                        [
                          "Heroku",
                          <StyledRating
                            key={1}
                            name="read-only"
                            value="4"
                            readOnly
                            size="small"
                            precision={0.5}
                          />,
                        ],
                        [
                          "Netlify",
                          <StyledRating
                            key={1}
                            name="read-only"
                            value="4"
                            readOnly
                            size="small"
                            precision={0.5}
                          />,
                        ],
                        [
                          "Windows 7/8/10",
                          <StyledRating
                            key={1}
                            name="read-only"
                            value="4.5"
                            readOnly
                            size="small"
                            precision={0.5}
                          />,
                        ],
                        [
                          "MS Office",
                          <StyledRating
                            key={1}
                            name="read-only"
                            value="3.5"
                            readOnly
                            size="small"
                            precision={0.5}
                          />,
                        ],
                        [
                          "Postman",
                          <StyledRating
                            key={1}
                            name="read-only"
                            value="4"
                            readOnly
                            size="small"
                            precision={0.5}
                          />,
                        ],
                        [
                          "Expo",
                          <StyledRating
                            key={1}
                            name="read-only"
                            value="3.5"
                            readOnly
                            size="small"
                            precision={0.5}
                          />,
                        ],
                      ]}
                    />
                  </Box>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
