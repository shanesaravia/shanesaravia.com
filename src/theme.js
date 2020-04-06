import { createMuiTheme } from "@material-ui/core/styles";
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      contrastText: '#fff'
    },
    custom: {
      grey: '#323232'
    }
  }
})

export default theme;