import React, { useState } from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControl } from "@material-ui/core";

import { confirmDegree } from "utils/functions";
import { globalAction } from "redux/actions/global_state";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 400,
    margin: "0 auto",
  },
  row: {
    marginBottom: theme.spacing(2),
  },
  formControl: {
    width: "100%",
    fontSize: "14px",
  },
  submitButton: {
    marginTop: "36px",
    width: "100%",
    float: "right",
  },
  title: {
    marginBottom: theme.spacing(6),
  },
}));

function Form(props) {
  const classes = useStyles();
  const { setStep, step, setResult, setClient, clientList } = props;
  const [degreeInfo, setDegreeInfo] = useState({
    encryptedDegree: "",
    encryptedDescription: "",
    encryptedProofOfDegree: "",
    client: "",
    ...props.value,
  });

  const {
    encryptedDegree,
    encryptedDescription,
    encryptedProofOfDegree,
    client,
  } = degreeInfo;

  function handleBack() {
    setStep(step - 1);
  }
  function handleSubmit() {
    if (
      encryptedDegree.trim() &&
      encryptedProofOfDegree.trim() &&
      encryptedDescription.trim() &&
      client.trim()
    ) {
      setStep(step + 1);
      const {
        encryptedDegree,
        encryptedDescription,
        encryptedProofOfDegree,
        client,
      } = degreeInfo;
      confirmDegree(
        client,
        encryptedDegree,
        encryptedDescription,
        encryptedProofOfDegree,
        (error, result) => {
          if (error) {
            props.dispatch(
              globalAction.NOTIFICATION({
                notification: true,
                notificationText: "Error",
                notificationType: false,
              })
            );
            setStep(step);
          } else {
            setResult(result);
            setClient(client);
            setStep(step + 2);
          }
        }
      );
    } else {
      props.dispatch(
        globalAction.NOTIFICATION({
          notification: true,
          notificationText: "ERROR: All fields must be filled in!",
          notificationType: false,
        })
      );
    }
  }
  function handleChange(e) {
    setDegreeInfo({
      ...degreeInfo,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div>
      <GridContainer direction="column" alignItems="center">
        <h3 className={classes.title}>Validate Degree Information</h3>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <GridItem xs={12} sm={12} md={12} lg={12} className={classes.row}>
            <FormControl className={classes.formControl} required>
              <InputLabel id="degree-c">Client Address</InputLabel>
              <Select
                labelId="degree-c"
                id="degree-c-select"
                name="client"
                value={client.toLowerCase()}
                onChange={handleChange}
              >
                {clientList.map((item) => {
                  return (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </GridItem>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <GridItem xs={12} sm={12} md={12} lg={12} className={classes.row}>
            <CustomInput
              labelText="Encrypted Degree"
              id="float"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                name: "encryptedDegree",
                value: encryptedDegree,
                onChange: handleChange,
              }}
            />
          </GridItem>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <GridItem xs={12} sm={12} md={12} lg={12} className={classes.row}>
            <CustomInput
              labelText="Encrypted Description"
              id="float"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                name: "encryptedDescription",
                value: encryptedDescription,
                onChange: handleChange,
              }}
            />
          </GridItem>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <GridItem xs={12} sm={12} md={12} lg={12} className={classes.row}>
            <CustomInput
              labelText="Encrypted Hash of Proof of Degree"
              id="float"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                name: "encryptedProofOfDegree",
                value: encryptedProofOfDegree,
                onChange: handleChange,
              }}
            />
          </GridItem>
        </GridItem>
      </GridContainer>
      <GridContainer justify="space-around">
        <GridItem xs={12} sm={12} md={2} lg={2}>
          <Button className={classes.submitButton} onClick={handleBack}>
            Back
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={2} lg={2}>
          <Button
            color="primary"
            className={classes.submitButton}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default connect()(withTheme(Form));
