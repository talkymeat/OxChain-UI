import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Done from '@material-ui/icons/CheckCircleOutline';


const styles = {
    wrapper: {
        paddingTop: '120px',
        flexDirection: 'column',
        "& p": {
            textAlign: 'center',
            marginBottom: '48px'
        }
    },
    iconSuccess: {
        color: '#28a745',
        fontSize: '72px'
    },
    iconWrapper: {
        marginBottom: '24px',
        textAlign: 'center'
    }
}

const useStyles = makeStyles(styles);

const Item = GridItem;
const Container = GridContainer;

export default function SectionTabs(props) {
  const classes = useStyles();
  const { handleBack } = props;
  
  return (
<Container style={{ height: '100%' }} justify="center" alignItems="center" className={classes.wrapper}>
                  <Item xs={4} lg={4} className={classes.iconWrapper}>
                    <Done className={classes.iconSuccess}/>
                    </Item>
                    <Item xs={12} lg={6}>
                        <p>
                        Your Information Has Been Registered to Blockchain Successfully.
                        </p>
                    </Item>
                    <Item xs={12} lg={4}>
                        <Button color="success" size="small" fullWidth onClick={handleBack}>Back</Button>
                    </Item>
                </Container>
  );
}
