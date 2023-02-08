import React from 'react';
import './modules/skills.css';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Person from './modules/Person';
import Table from './modules/Table';

const useStyles = makeStyles(theme => ({
  featured: {
    fontFamily: 'Muli',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  container: {
    width: '100%',
    maxWidth: 1000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  personContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    height: '100%',
  },
  
  table: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 0
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
          <Person />
          <Person
            headAnimation='head2'
            eyesAnimation='eyes2'
            hair='hair2'
            shirt='shirt2'
            shoes='shoes2'
            pants='pants2'
            logo='typescript'
            speech='javascript'
            speechPosition='right'
          />
          <Person
            headAnimation='head1'
            eyesAnimation='eyes1'
            hair='hair2'
            shirt='shirt3'
            shoes='shoes3'
            pants='pants3'
            logo='golang'
            speech='golang'
            speechPosition='right'
          />
        </div>
        <Table className={classes.table} />
      </div>
    </>
  )
}

export default FeaturedSkills;