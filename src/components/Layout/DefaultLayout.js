import React from 'react';
import { Route } from "react-router-dom";
import Header from 'components/Layout/Header';
import Sidebar from 'components/Layout/Sidebar';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  }
}))

const DefaultLayout = ({ component: Component, title = null, ...rest }) => {
  const drawerWidth = 240;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    console.log('handleDrawerOpen called')
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    console.log('handleDrawerClosed called')
    setOpen(false);
  };

  const layoutProps = {
    drawerWidth,
    open,
    handleDrawerOpen,
    handleDrawerClose
  }

  return (
    <Route
      {...rest}
      render={props => (
        <div className={classes.root}>
          <CssBaseline />
          <Header title={title || Component.name} {...layoutProps} />
          <Sidebar content={<Component {...props} />} test={100} {...layoutProps} />
          {/* <Component {...props} /> */}
        </div>
      )}
    />
  );
}

export default DefaultLayout;