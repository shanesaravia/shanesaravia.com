import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import projectsContent from './Projects/modules/projectsContent';
import ProjectTile from './Projects/modules/ProjectTile';

const useStyles = makeStyles(theme => ({
  heroBanner: {
    position: 'relative',
    width: 'calc(100% + 48px)',
    margin: theme.spacing(-3, -3, 2, -3),
  },
  headerContainer: {
    position: 'absolute',
    color: 'white',
    top: '30%',
    
  },
  header: {
    fontFamily: 'Muli'
  },
  subheader: {
    fontFamily: 'Quicksand'
  },
  paper: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4)
    }
  },
  featured: {
    fontFamily: 'Muli',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  container: {
    display: 'grid',
    gridGap: 20,
    gridTemplateColumns: 'repeat(auto-fit, 300px)'
  }
}))


const Home = () => {
  const classes = useStyles();

  return (
    <>
    <img src='hero-banner4.png' className={classes.heroBanner} />
    <Paper className={classes.paper}>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
      >
        <div className={classes.headerContainer}>
          <Typography variant='h1' className={classes.header}>Shane Saravia</Typography>
          <Typography variant='h5' className={classes.header}>Full Stack Software Developer</Typography>
          <Typography variant='caption' className={classes.subheader}>
              I am a dedicated professional from Toronto, Ontario.<br />Specializing in full stack software development.
          </Typography>
        </div>
        <Typography className={classes.featured} variant='h5'>
          Featured Projects
        </Typography>
        <Grid container justify='center' className={classes.container}>
          {
            projectsContent.map((project, idx) => (
              <Grid item key={idx}>
                <ProjectTile {...project} />
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Paper>
    </>
  )
}

export default Home;