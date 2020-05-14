import React, { useState } from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControl, FormHelperText } from "@material-ui/core";
import Chip from '@material-ui/core/Chip';

import { insert_license } from "utils/functions";
import { globalAction } from 'redux/actions/global_state';
import { connect } from 'react-redux';

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
    marginBottom: theme.spacing(6)
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
}));

function Form(props) {
  const classes = useStyles();
  const { setStep, step, validatorList } = props;
  const [licenseInfo, setLicenseInfo] = useState({
    encryptedLicense: "",
    encryptedDate: "",
    encryptedDescription: "",
    encryptedProofOfLicense: "",
    validators: [],
    ...props.value,
  });

  const { encryptedLicense, encryptedDate, encryptedDescription, encryptedProofOfLicense, validators } = licenseInfo;

  function handleBack() {
    setStep(step - 1);
  }
  function handleSubmit() {
    if (
      encryptedLicense.trim() &&
      encryptedDate.trim() &&
      encryptedDescription.trim() &&
      encryptedProofOfLicense.trim()
    ) {
      setStep(step+1);
      insert_license(encryptedLicense, encryptedDate, encryptedDescription, encryptedProofOfLicense, validators, (error) => {
        if (error) {
          props.dispatch(globalAction.NOTIFICATION({
            notification: true,
            notificationText: "Error",
            notificationType: false,
          }))
          setStep(step);
        } else {
          setStep(step + 2);
        }
      });
    }  else {
      props.dispatch(globalAction.NOTIFICATION({
        notification: true,
        notificationText: "ERROR: All fields must be filled in!",
        notificationType: false,
      }))
    }   
    
  }
  function handleChange(e) {
    if (e.target.name.includes("validator")) {
      if (e.target.value.length <= 4) {
        setLicenseInfo({
          ...licenseInfo,
          validators: e.target.value
        })
      }

    } else {
      setLicenseInfo({
        ...licenseInfo,
        [e.target.name]: e.target.value,
      });
    }
  }
  return (
    <div>
      <GridContainer direction="column" alignItems="center">
        <h3 className={classes.title}>Register License Information</h3>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <GridItem xs={12} sm={12} md={12} lg={12} className={classes.row}>
            <CustomInput
              labelText="Encrypted License"
              id="float"
              formControlProps={{
                fullWidth: true,
                required: true
              }}
              inputProps={{
                name: "encryptedLicense",
                value: encryptedLicense,
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
                required: true
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
              labelText="Encrypted Expire Date"
              id="float"
              formControlProps={{
                fullWidth: true,
                required: true
              }}
              inputProps={{
                name: "encryptedDate",
                value: encryptedDate,
                onChange: handleChange,
              }}
            />
          </GridItem>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <GridItem xs={12} sm={12} md={12} lg={12} className={classes.row}>
            <CustomInput
              labelText="Encrypted Hash of Proof of License"
              id="float"
              formControlProps={{
                fullWidth: true,
                required: true
              }}
              inputProps={{
                name: "encryptedProofOfLicense",
                value:encryptedProofOfLicense,
                onChange: handleChange,
              }}
            />
          </GridItem>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <GridItem xs={12} sm={12} md={12} lg={12} className={classes.row}>
          <FormControl className={classes.formControl} required>
              <InputLabel id="license-v-1">Validators</InputLabel>
              <Select
                labelId="license-v-1"
                id="license-v-1-select"
                name= "validators"
                value={licenseInfo.validators}
                onChange={handleChange}
                multiple
                renderValue={(selected) => (
                  <div className={classes.chips}>
                    {selected.map((value) => (
                      <Chip variant="outlined" color="primary" key={value} label={value} className={classes.chip} />
                    ))}
                  </div>
                )}
              >
                {
                  validatorList.map(item => {
                  return <MenuItem value={item} key={item}>{item}</MenuItem>
                  })
                }
              </Select>
              <FormHelperText>The maximum number of validators is 4.</FormHelperText>
            </FormControl>
          </GridItem>
        </GridItem>
    
      </GridContainer>
      <GridContainer justify="space-around">
        <GridItem xs={12} sm={12} md={2} lg={2}>
        <Button color="default" className={classes.submitButton} onClick={handleBack}>
            Back
        </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={2} lg={2}>
        <Button color="primary" className={classes.submitButton} onClick={handleSubmit}>
            Submit
        </Button>
        </GridItem>
            </GridContainer>
      
    </div>
  );
}

export default connect()(withTheme(Form));
