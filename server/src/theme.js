/**
 * Author: JIN XIAO
 * Email: xiaojin971212@gmail.com
 */
// import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9c27b0',
    },
    secondary: {
      // main: '#2BD67B',
      main: "#4caf50"
    }
  },
  overrides: {
      MuiInputBase: {
          root: {
              fontSize: "14px"
          }
      },
      MuiSelect: {
        select: {
          "&:focus": {
            backgroundColor: 'transparent',
            borderColor: '#fff'
          }
          
        }
      },
      MuiFormLabel: {
        root: {
          fontSize: "14px"
        }
      }
  }
});

export default theme;