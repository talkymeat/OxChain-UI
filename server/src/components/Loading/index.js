import React, { useState } from "react";
import ReactLoading from "react-loading";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

const Container = GridContainer;
const Item = GridItem;

const styles = {
  loadingWrapper: {
    width: "100%",
    paddingTop: "120px",
    flexDirection: "column",
    "& p": {
      textAlign: "center",
      marginBottom: "48px",
    },
  },
};

const useStyles = makeStyles(styles);

export default function Loading(props) {
  const { callback, open, handleClick, text, showButton = true } = props;
  const classes = useStyles();
  if (callback) {
    callback();
  }
  return (
    <Container
      style={{ height: "100%" }}
      justify="center"
      alignItems="center"
      className={classes.loadingWrapper}
    >
      <Item xs={1} lg={1}>
        <ReactLoading
          type="cubes"
          color="#9c27b0"
          height={"100%"}
          width={"100%"}
        />
      </Item>
      <Item xs={12} lg={6}>
        <p>{text || "Please Confirm This Transaction with Metamask."}</p>
      </Item>
      {showButton ? (
        <Item xs={12} lg={4}>
          <Button color="primary" size="small" fullWidth onClick={handleClick}>
            Already Confirmed
          </Button>
        </Item>
      ) : (
        ""
      )}
    </Container>
  );
}
