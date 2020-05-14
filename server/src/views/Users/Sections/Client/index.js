import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
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
import Stepper from "components/Stepper";
import Button from "components/CustomButtons/Button.js";
// import Table from './Table';
import AgeForm from "./AgeForm";
import DegreeForm from "./DegreeForm";
import LicenseForm from "./LicenseForm";
import MainForm from "./MainForm";
import Loading from "components/Loading";
import Success from "components/Success";
import { REGISTER_STEP, TYPE } from "utils/enum";

import styles from "./style.js";

const useStyles = makeStyles(styles);

const Item = GridItem;
const Container = GridContainer;
const step = ["Step1", "Step2", "Step3", "Step4", "Step5"];

function SectionTabs(props) {
  let valueEntity = {};
  let initialStep = 0;
  let initialType = 0;
  if (props.location.search) {
    const searchString = props.location.search.substring(1);
    let i,
      val,
      params = searchString.split("&");
    for (i = 0; i < params.length; i++) {
      val = params[i].split("=");
      valueEntity[val[0]] = val[1];
    }
  }
  if (!valueEntity.hasOwnProperty("type")) {
    valueEntity = {}
  } else {
    initialStep = 1;
    initialType = valueEntity["type"]
  }
  const classes = useStyles();
  const [step, setStep] = useState(initialStep);
  const [type, setType] = useState(initialType);
  const [value, setValue] = useState(valueEntity);
  const { userlist } = props;


  // const [loading, setLoading] = useState(false);
  let Content = <div>null</div>;

  function renderForm(key) {
    switch (+key) {
      case TYPE.AGE:
        return <AgeForm setStep={setStep} step={step} setValue={setValue} value={value} validatorList={userlist["validator"]}/>;
      case TYPE.DEGREE:
        return <DegreeForm setStep={setStep} step={step} setValue={setValue} value={value} validatorList={userlist["validator"]}/>;
      case TYPE.LICENSE:
        return (
          <LicenseForm setStep={setStep} step={step} setValue={setValue} value={value} validatorList={userlist["validator"]}/>
        );
      default:
        return <div>null</div>;
    }
  }

  const LoadingComponent = (
    <Loading
      showButton={false}
    />
  );

  switch (step) {
    case REGISTER_STEP.SELECT:
      Content = (
        <MainForm setStep={setStep} setType={setType} type={type} step={step} />
      );
      break;
    case REGISTER_STEP.FILL_INFORMATION:
      Content = renderForm(type);
      break;
    case REGISTER_STEP.CONFIRM_TRANSATION:
      Content = LoadingComponent;
      break;
    case REGISTER_STEP.COMPLETE:
      Content = (
        <Success
          handleBack={() => {
            props.history.push("/user/0");
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
                          {/* <Item>
                            <Stepper activeStep={0} steps={step}/>
                                </Item> */}
                          <Item xs={12} md={12} lg={12}>
                            {Content}
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

const mapStateToProps = state => (
  {
    userlist: state.userlist
  }
)

export default connect(mapStateToProps)(withRouter(SectionTabs));