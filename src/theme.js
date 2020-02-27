import { createMuiTheme } from "@material-ui/core/styles";
import { blue, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      contrastText: '#fff'
    },
    secondary: {
      light: grey[300],
      main: grey[500],
      dark: grey[700],
      contrastText: '#fff'
    }
  }
})

export default theme;