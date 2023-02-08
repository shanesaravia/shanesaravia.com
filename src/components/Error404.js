import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  image: {
    width: 400,
    height: 'auto'
  },
  message: {
    fontFamily: 'quicksand'
  }
})

const Error404 = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <img src={'panda404.png'} alt='Sad Panda 404' className={classes.image} />
      </Grid>
      <Grid item>
        <Typography variant='h2' className={classes.message}>404 Error: Page Not Found!</Typography>
      </Grid>
    </Grid>
  )
}

export default Error404;