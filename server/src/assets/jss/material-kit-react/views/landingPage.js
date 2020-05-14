import { container, title } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  formControl: {
    width: "200px",
    color: '#fff',
    marginLeft: '14px',
    marginRight: '14px',
    // background: '#f00',
    "& .MuiSelect-outlined.MuiSelect-outlined": {
      color: '#fff',
      border: "1px solid #fff",
      borderRadius: '4px',
    },
    "&:hover": {
      color: '#fff',
      border: "1px solid #fff",
      borderRadius: '4px',
    },
    "& .MuiInputLabel-outlined" : {
      color: "#fff",
      display: 'none'
    },
    "& .MuiSelect-icon": {
      color: '#fff'
    },
    "& .MuiFormControl-root": {
      borderColor: '#fff !important'
    },
    "& .Mui-focused:focus": {
      borderColor: '#fff !important'
    },
    "& .MuiSelect-root:focus": {
      borderColor: '#fff !important'
    },
    "& .MuiSelect-root:hover": {
      border: 'none !important'
    }
  },
};

export default landingPageStyle;
