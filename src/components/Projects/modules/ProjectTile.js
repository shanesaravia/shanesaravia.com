import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton,
        Typography,
        Tooltip,
        Divider,
        Card,
        CardContent,
        CardMedia } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import GlobeIcon from '@material-ui/icons/Public';
import PropTypes from 'prop-types';

// NOTES: Poppins font used for banners
const useStyles = makeStyles({
  root: {
    width: 300,
    minHeight: 370,
  },
  media: {
    height: 120,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 250
  },
  tools: {
    color: 'grey',
    position: 'relative',
    top: '-10px'
  },
  description: {
    flexGrow: 1
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  }
});

const ProjectTile = props => {
  const classes = useStyles();
  const { name, tools, description, image, liveUrl, githubUrl } = props;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={ image }
        title={ name }
      />
      <Divider />
      <CardContent className={classes.content}>
        <Typography variant='caption' className={classes.tools}>
          { tools.join(' - ') }
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          { name }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
          { description }
        </Typography>
          <div className={classes.buttons}>
            {
              liveUrl ?
              <Tooltip title='Live App'>
                <a href={liveUrl} target='_blank' rel='noopener noreferrer'>
                  <IconButton aria-label='Live App'>
                    <GlobeIcon />
                  </IconButton>
                </a>
              </Tooltip> :
              null
            }
            {
              githubUrl ?
              <Tooltip title='Github'>
                <a href={githubUrl} target='_blank' rel='noopener noreferrer' >
                  <IconButton aria-label='Github'>
                    <CodeIcon />
                  </IconButton>
                </a>
              </Tooltip> :
              null
            }
        </div>
      </CardContent>
    </Card>
  )
}

ProjectTile.propTypes = {
  name: PropTypes.string,
  tools: PropTypes.array,
  description: PropTypes.string,
  image: PropTypes.string,
  liveUrl: PropTypes.string,
  githubUrl: PropTypes.string
}

export default ProjectTile;