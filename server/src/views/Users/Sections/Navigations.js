import React, { useState } from "react";
import { withRouter } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Table from "./Table";
import Form from "./Form";
import Loading from "components/Loading";
import Success from "components/Success";

import styles from "./NavigationStyle.js";

const useStyles = makeStyles(styles);

const Item = GridItem;
function SectionTabs(props) {
  const classes = useStyles();
  const [step, setStep] = useState(0);
  let item = <div> </div>;
  switch (step) {
    case 0:
      item = <Form setStep={setStep} step={step} />;
      break;
    case 1:
      item = <Loading showButton={false} />;
      break;
    case 2:
      item = (
        <Success
          handleBack={() => {
            props.history.push("/");
          }}
        />
      );
      break;
    default:
      break;
  }
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomTabs
                plainTabs
                headerColor="danger"
                tabs={[
                  {
                    tabName: "Register",
                    tabContent: (
                      <React.Fragment>
                        <GridContainer className={classes.tabContent}>
                          <Item xs={12} md={12} lg={12}>
                            {item}
                          </Item>
                        </GridContainer>
                      </React.Fragment>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SectionTabs);
