import React from 'react';
import './modules/skills.css';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Personbackup from './modules/images/Personbackup';
import Person2 from './modules/images/Person2';
import Person from './modules/images/Person';
import Table from './modules/images/Table';

const useStyles = makeStyles(theme => ({
  featured: {
    fontFamily: 'Muli',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  container: {
    // border: '4px solid red',
    width: '100%',
    maxWidth: 1000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    marginTop: '4%',
    [theme.breakpoints.down('lg')]: {
      marginTop: '7%'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '10%'
    }
  },
  personContainer: {
    // border: '4px solid green',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    height: '100%',
  },
  
  table: {
    position: 'absolute',
    // border: '1px solid orange',
    width: '100%',
    bottom: 0,
    [theme.breakpoints.down('sm')]: {
      bottom: 2
    },
    [theme.breakpoints.down('xs')]: {
      bottom: 4
    },
  },
  person: {
    // border: '1px solid blue',
    // position: 'absolute',
    // position: 'relative',
    width: '22%',
    // height: '100%'
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
          {/* <Person2 className={classes.person} /> */}
          {/* <Person2 className={classes.person} /> */}
          <Person className={classes.person} />
          <Person className={classes.person} />
          {/* <Person className={classes.person} headAnimation='head2' hair='hair2' shirt='shirt2' shoes='shoes2' pants='pants2' /> */}
        </div>
        <Table className={classes.table} />
      </div>
    </>
  )
}

export default FeaturedSkills;