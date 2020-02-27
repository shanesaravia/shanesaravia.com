import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    fontFamily: 'Droid Serif'
    // fontFamily: 'Lato Light'
  },
  subheader: {
    fontFamily: 'Lato Light',
    // color: '#F0F0F0'
  },
  paper: {
    padding: 40
  }
}))

const Home = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
    >
        <Typography variant='h2' className={classes.header}>Shane Saravia</Typography>
        <Typography variant='caption' className={classes.subheader}>
          I am a dedicated professional from Toronto, Ontario.
        </Typography>
        <Typography variant='caption' className={classes.subheader}>
          Specializing in full stack software development.
        </Typography>
    </Grid>
    </Paper>
  )
}

export default Home;