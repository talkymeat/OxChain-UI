/**
 * Author: JIN XIAO
 * Email: xiaojin971212@gmail.com
 */
import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Stepper from "../../components/Stepper";
// import InsertSeed from "./InsertSeed"; // DC@20-04-20: No longer needed
import EncryptAttribute from "./EncryptAttribute";
import ResultPage from "./ResultPage";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#fff",
    marginTop: theme.spacing(8)
  },
  container: {
    padding: theme.spacing(8)
  },
  stepper: {
    paddingTop: theme.spacing(2)
  },
  stepContent: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  }
}));

function ClientPageWrapper(props) {
  const classes = useStyles();
  return <ClientPage classes={classes} {...props} />;
}

function getSteps() {
  return ["Select Attribute", "Finish"]; // DC@20-04-20: removed old 0th value, "Insert Encryption Key"
}

class ClientPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      valueEntry: {},
    };
    if (this.props.location.state) {
      this.state.log = this.props.location.state.log || [];
    }
    else {
      this.state.log = [];
    }
  }
  componentDidMount() {
    // console.log(this.props);
  }

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  updateValueEntry = (key, value) => {
    const { valueEntry } = this.state;
    this.setState(
      {
        valueEntry: Object.assign(valueEntry, { [key]: value })
      }
    );
  };


  render() {
    const { classes } = this.props;
    const { activeStep, valueEntry } = this.state;
    var { log } = this.state;
    const steps = getSteps();
    // DC@20-04-20: Removed old step 0, inserting seed: new version of algorithm uses new random value each time
    // DC@20-04-20: Renumbered steps 1 and 2 to 0 and 1
    // DC@20-04-20: Removed handleBack from EncryptAttribute, as it is now the 1st step
    return (
      <React.Fragment>
        <CssBaseLine />
        <Container fixed className={classes.root} maxWidth="md">
          <Box className={classes.container}>
            <div className={classes.stepper}>
              <Stepper activeStep={activeStep} steps={steps} />
            </div>

            <div className={classes.stepContent}>
              <div style={{ display: activeStep === 0 ? "block" : 'none' }}>
                <EncryptAttribute
                  handleNext={this.handleNext}
                  valueEntry={valueEntry}
                  updateValueEntry={this.updateValueEntry}
                  log={log}
                />
              </div>
              <div style={{ display: activeStep === 1 ? "block" : 'none' }}>
                <ResultPage
                  handleBack={this.handleBack}
                  valueEntry={valueEntry}
                  log={log}
                  />
              </div>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    );
  }
}

export default ClientPageWrapper;
