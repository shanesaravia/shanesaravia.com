import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import ProjectTile from '../../Projects/modules/ProjectTile';
import projectContent from '../../Projects/modules/projectsContent';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridGap: 20,
    gridTemplateColumns: 'repeat(auto-fit, 300px)'
  },
  featured: {
    fontFamily: 'Muli',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  }
}))

const featured = ['Sorting Visualizer', 'Movieflix', 'Finance Summary', 'Spotlite'];
const filtered = projectContent.filter(project => featured.includes(project.name));

const FeaturedProjects = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.featured} variant='h5'>
        Featured Projects
      </Typography>
      <Grid container justifyContent='center' className={classes.container}>
        {
          filtered.map((project, idx) => (
            <Grid item key={idx}>
              <ProjectTile {...project} />
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

export default FeaturedProjects;