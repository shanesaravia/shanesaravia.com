import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  image: {
    width: 400,
    height: 'auto'
  },
  message: {
    fontFamily: 'quicksand'
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.light
  },
  errorBoundary: {
    marginTop: 100
  }
}))

const Error404 = props => {
  const classes = useStyles();
  const { errorBoundary } = props;
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={errorBoundary ? classes.errorBoundary : null}
    >
      <Grid item>
        <img src={'panda500.png'} alt='Sad Panda 500' className={classes.image} />
      </Grid>
      <Grid item>
        <Typography variant='h2' className={classes.message}>500 Error: Something Went Wrong!</Typography>
      </Grid>
      <Grid item>
        <Typography variant='h6'><a href='/' className={classes.link}>Click here to return to the app</a></Typography>
      </Grid>
    </Grid>
  )
}

export default Error404;