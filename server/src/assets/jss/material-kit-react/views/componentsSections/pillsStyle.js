import { container, title, boxShadow } from "assets/jss/material-kit-react.js";

const pillsStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#999"
  },
  downloadPannel: {
    "& a": {
      display: "flex"
    }
  },
  localImg: {
    width: '100%',
    borderRadius: '4px',
    ...boxShadow
  },
  localButton: {
    margin: '24px 0 48px',
    width: '100%',
    // background: '#fff',
    // boxShadow: 'none',
    // border: '1px solid #eee'
  }
};

export default pillsStyle;
