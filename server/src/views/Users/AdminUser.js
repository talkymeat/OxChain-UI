import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from 'react-router-dom';
import styles from "views/Users/Styles/adminProfile";
import Tabs from './Sections/Navigations';
import { check_organization } from "utils/functions";
import Loading from 'components/Loading';
import { globalAction } from 'redux/actions/global_state';
import { connect } from 'react-redux';

const useStyles = makeStyles(styles);

function AdminProfile(props) {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        check_organization((error) => {
          if (error) {
            props.dispatch(globalAction.NOTIFICATION({
              notification: true,
              notificationText: "Only valid owner can login! Please register first!",
              notificationType: false,
            }))
            props.history.push("/");
  
          } else {
            setLoading(false)
          }
        });
      }, 0)
    }, []);
  return (
    <div className={classes.container}>
      {
        loading ? <Loading showButton={false} text="Checking Your Role, Please Wait." /> : <Tabs />
      }
    </div>
  );
}

export default connect()(withRouter(AdminProfile));