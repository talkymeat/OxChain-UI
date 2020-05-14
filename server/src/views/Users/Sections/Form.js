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
import { USER_TYPE } from "utils/enum";
import { register_client, register_validator } from "utils/functions";
import { connect } from "react-redux";
import { globalAction } from 'redux/actions/global_state';


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
  const [info, setInfo] = useState({});
  const { step, setStep } = props;
  function handleChange(e) {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit() {
    if (info.role !== undefined && info.address !== undefined) {

        setStep(step + 1);
        switch (info.role) {
          case USER_TYPE.CLIENT:
            register_client(info.address, (error) => {
              if (error) {
                props.dispatch(globalAction.NOTIFICATION({
                  notification: true,
                  notificationText: error.message,
                  notificationType: false,
                }))
                setStep(step);
              } else {
                setStep(step + 2);
              }
            });
            break;
          case USER_TYPE.VALIDATOR:
            register_validator(info.address, (error) => {
              if (error) {
                props.dispatch(globalAction.NOTIFICATION({
                  notification: true,
                  notificationText: error.message,
                  notificationType: false,
                }))
                setStep(step);
              } else {
                setStep(step + 2);
              }
            });
            break;

          default:
            break;
        }
    }
  }

  // function checkExist() {
  //   const { role, address } = info;
  //   const { userlist } = props;
  //   let flag = false;
  //   switch (role) {
  //     case USER_TYPE.CLIENT:
  //       userlist["client"].forEach((i) => {
  //         if (i.toString().toLowerCase() == address.toString().toLowerCase()) {
  //           flag = true;
  //         }
  //       });
  //       break;
  //     case USER_TYPE.VALIDATOR:
  //       userlist["validator"].forEach((i) => {
  //         if (i.toString().toLowerCase() == address.toString().toLowerCase()) {
  //           flag = true;
  //         }
  //       });
  //       break;
  //     case USER_TYPE.SERVICE_USER:
  //       userlist["service"].forEach((i) => {
  //         if (i.toString().toLowerCase() == address.toString().toLowerCase()) {
  //           flag = true;
  //         }
  //       });
  //       break;

  //     default:
  //       break;
  //   }
  //   return flag;
  // }
  return (
    <div>
      <GridContainer direction="column" alignItems="center">
        <h3 className={classes.title}>Register Users</h3>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <GridItem xs={12} sm={12} md={12} lg={12} className={classes.row}>
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel id="role">Role</InputLabel>
              <Select
                labelId="role"
                id="role-select"
                name="role"
                onChange={handleChange}
              >
                <MenuItem value={USER_TYPE.CLIENT}>Client</MenuItem>
                <MenuItem value={USER_TYPE.VALIDATOR}>Validator</MenuItem>
              </Select>
            </FormControl>
          </GridItem>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <GridItem xs={12} sm={12} md={12} lg={12} className={classes.row}>
            <CustomInput
              labelText="User Address"
              id="float"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                onChange: handleChange,
                name: "address",
              }}
            />
          </GridItem>
        </GridItem>

        <GridItem xs={12} sm={12} md={12} lg={2}>
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

const mapStateToProps = (state) => ({
  userlist: state.userlist,
});

export default connect(mapStateToProps)(withTheme(Form));
