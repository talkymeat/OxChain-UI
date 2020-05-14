import React from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControl } from "@material-ui/core";

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
  }
}));

function Form(props) {
  const classes = useStyles();
  function handleNext () {
    const {step, setStep} = props;
    setStep(step + 1);
  }
  return (
    <div>
      <GridContainer direction="column" alignItems="center">
        <h3 className={classes.title}>Register Information</h3>
        <GridItem xs={12} sm={12} md={12} lg={6}>
          <GridItem xs={12} sm={12} md={12} lg={12} className={classes.row}>
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel id="role">Type</InputLabel>
              <Select
                labelId="role"
                id="role-select"
                value={props.type}
                onChange={(e) => {
                    const { setType } = props;
                    setType(e.target.value);
                }}
              >
                <MenuItem value={0}>Age</MenuItem>
                <MenuItem value={1}>Degree</MenuItem>
                <MenuItem value={2}>License</MenuItem>

              </Select>
            </FormControl>
          </GridItem>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={12} lg={2}>
        <Button color="primary" className={classes.submitButton} onClick={handleNext}>
        Next
      </Button>
        </GridItem>
      </GridContainer>
      
    </div>
  );
}

export default withTheme(Form);
