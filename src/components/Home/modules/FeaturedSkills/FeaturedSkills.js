import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Skills from './modules/Skills';

const useStyles = makeStyles(theme => ({
  featured: {
    fontFamily: 'Muli',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  }
}))

const FeaturedSkills = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.featured} variant='h5'>
        Featured Skills
      </Typography>
      <Grid container>
        <Grid container item xs={6} justify='center'>
          <Skills body='body1' head='head3' face='face3' />
        </Grid>
        <Grid container item xs={6} justify='center'>
          <Skills body='body2' head='head1' face='face1' />
        </Grid>
      </Grid>
    </>
  )
}

export default FeaturedSkills;