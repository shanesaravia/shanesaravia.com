import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import FeaturedProjects from './modules/FeaturedProjects';
import FeaturedSkills from './modules/FeaturedSkills';

const useStyles = makeStyles(theme => ({
  headerSection: {
    backgroundColor: theme.palette.custom.grey,
    // background: 'linear-gradient(#4791db, #323232)',
    padding: 0,
    margin: '-40px -40px 0 -40px',
    width: 'calc(100% + 80px)',
    display: 'flex',
    justifyContent: 'center'
  },
  headerContainer: {
    margin: theme.spacing(5, 0)
  },
  header: {
    fontFamily: 'Muli',
    color: 'white',
  },
  subheader: {
    fontFamily: 'Quicksand',
    color: 'white'
  },
  paper: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4)
    }
  }
}))


const Home = () => {
  const classes = useStyles();

  const subheadings = [
    'Full Stack Software Developer',
    'Python Developer',
    'Javascript Developer'
  ]

  return (
    <Paper className={classes.paper}>
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
    >
      <div className={classes.headerSection}>
        <div className={classes.headerContainer}>
          <Typography variant='h1' className={classes.header}>Shane Saravia</Typography>
          <Typography variant='h4' className={classes.header}>
            <Typed
              strings={subheadings}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </Typography>
          <Typography variant='caption' className={classes.subheader}>
              I am a dedicated professional from Toronto, Ontario specializing in full stack software development.
          </Typography>
        </div>
      </div>
      <FeaturedSkills />
      <FeaturedProjects />
    </Grid>
    </Paper>
  )
}

export default Home;