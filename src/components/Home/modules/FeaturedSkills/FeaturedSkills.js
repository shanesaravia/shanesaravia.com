import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Skills from './modules/Skills';
import Person from './modules/Person';
import PersonTest from './modules/PersonTest';
import Table from './modules/images/Table';

const useStyles = makeStyles(theme => ({
  featured: {
    fontFamily: 'Muli',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  container: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  
  table: {
    position: 'absolute',
    top: '45%',
    width: '55%',
    // transform: 'translate(0, -130%)'
    [theme.breakpoints.down('sm')]: {
      width: '75%'
    },
  },
  person1: {
    width: '10%',
    [theme.breakpoints.down('sm')]: {
      width: '15%'
    },
  }
}))

const FeaturedSkills = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.featured} variant='h5'>
        Top Skills
      </Typography>
      {/* <Grid container>
        <Grid container item xs={6} justify='center'>
          <Skills body='body1' head='head3' face='face3' img='python.png' shirtColor='#B22222' />
        </Grid>
        <Grid container item xs={6} justify='center'>
          <Skills body='body2' head='head2' face='face2' img='javascript.png' shirtColor='#191970' />
        </Grid>
      </Grid> */}
      {/* <Person
        head='head1'
        body='body1'
        legs='legs1'
        chair='chair1'
      /> */}
      <div className={classes.container}>
        <PersonTest className={classes.person1} />
        <Table className={classes.table} />
      </div>
    </>
  )
}

export default FeaturedSkills;