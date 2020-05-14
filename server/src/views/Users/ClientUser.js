import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "views/Users/Styles/clientProfile";
import Nav from './Sections/Client';

import { check_client } from "utils/functions";
import Loading from 'components/Loading';
import { globalAction } from 'redux/actions/global_state';
import { connect } from 'react-redux';

const useStyles = makeStyles(styles);

function ProfilePage(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      check_client((error) => {
        if (error) {
          props.dispatch(globalAction.NOTIFICATION({
            notification: true,
            notificationText: "Only valid client can login! Please register first!",
            notificationType: false,
          }))
          props.history.push("/");
        } else {
          setLoading(false)
        }
      });
    }, 0);
    
  }, []);
  return (
    <div>
      {
        loading ? <Loading showButton={false} text="Checking Your Role, Please Wait." /> : <Nav {...props}/>
      }
    
    </div>
  );
}

export default connect()(withRouter(ProfilePage));

