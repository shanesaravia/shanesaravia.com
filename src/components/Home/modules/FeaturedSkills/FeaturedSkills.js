import React from 'react';
import './modules/skills.css';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Person from './modules/images/Person';
import Table from './modules/images/Table';

const useStyles = makeStyles(theme => ({
  featured: {
    fontFamily: 'Muli',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: '50%',
    maxWidth: 1000,
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
      width: '100%'
    },
  },
  personContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    height: '100%'
  },
  
  table: {
    width: '100%',
    position: 'absolute',
    top: '48%',
    // [theme.breakpoints.down('sm')]: {
    //   width: '75%'
    // },
  },
  person1: {
    position: 'relative',
    width: '22%',
    height: '100%'
    // [theme.breakpoints.down('sm')]: {
    //   width: '15%'
    // },
  }
}))

const FeaturedSkills = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.featured} variant='h5'>
        Top Skills
      </Typography>
      <div className={classes.container}>
        <div className={classes.personContainer}>
          <Person className={classes.person1} headAnimation='head1' />
          <Person className={classes.person1} headAnimation='head2' hair='hair2' shirt='shirt2' shoes='shoes2' pants='pants2' />
        </div>
        <Table className={classes.table} />
      </div>
    </>
  )
}

export default FeaturedSkills;