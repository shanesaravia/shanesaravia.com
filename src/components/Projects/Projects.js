import React from 'react';
import ProjectTile from './modules/ProjectTile';
import projectsContent from './modules/projectsContent';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 300px)',
    gridGap: 20
  }
})

const Projects = () => {
  const classes = useStyles();

  return (
    <Grid container justify='center' className={classes.container}>
      {
        projectsContent.map(project => (
          <Grid item>
            <ProjectTile {...project} />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Projects;