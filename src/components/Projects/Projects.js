import React from 'react';
import ProjectTile from './modules/ProjectTile';
import projectsContent from './modules/projectsContent';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridGap: 20,
    gridTemplateColumns: 'repeat(auto-fit, 300px)'
  }
})

const Projects = () => {
  const classes = useStyles();

  return (
    <Grid container justify='center' className={classes.container}>
      {
        projectsContent.map((project, idx) => (
          <Grid item key={idx}>
            <ProjectTile {...project} />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Projects;