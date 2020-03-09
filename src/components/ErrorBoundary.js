import React, { Component } from 'react';
import Error500 from 'components/Error500';
import Header from 'components/Layout/Header';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('error: ', error);
    console.error('error info: ', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <MuiThemeProvider theme={theme}>
          <Header title='Error 500' hideIcon />
          <Error500 errorBoundary/>
        </MuiThemeProvider>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;