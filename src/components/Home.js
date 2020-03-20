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
          I am a dedicated professional from Toronto, Ontario.<br />Specializing in full stack software development.
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