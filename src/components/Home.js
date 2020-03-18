import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import projectsContent from './Projects/modules/projectsContent';
import ProjectTile from './Projects/modules/ProjectTile';

const useStyles = makeStyles(theme => ({
  header: {
    fontFamily: 'Muli'
  },
  subheader: {
    fontFamily: 'Quicksand'
  },
  paper: {
    padding: 40
  },
  featured: {
    fontFamily: 'Muli',
    marginTop: 30,
    marginBottom: 20
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 300px)',
    gridGap: 20
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
  )
}

export default Home;