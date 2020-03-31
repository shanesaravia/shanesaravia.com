import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Skills from './modules/Skills';
import TableImage from './modules/TableImage';

const useStyles = makeStyles(theme => ({
  featured: {
    fontFamily: 'Muli',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  table: {
  }
}))

const FeaturedSkills = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.featured} variant='h5'>
        Top Skills
      </Typography>
      <Grid container>
        <Grid container item xs={6} justify='center'>
          <Skills body='body1' head='head3' face='face3' img='python.png' shirtColor='#B22222' />
        </Grid>
        <Grid container item xs={6} justify='center'>
          <Skills body='body2' head='head2' face='face2' img='javascript.png' shirtColor='#191970' />
        </Grid>
      </Grid>
      <TableImage className={classes.table} />
    </>
  )
}

export default FeaturedSkills;