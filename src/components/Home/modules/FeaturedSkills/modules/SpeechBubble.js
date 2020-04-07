import React from 'react';
import Typed from 'react-typed';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  bubble: {
    zIndex: theme.zIndex.drawer + 2,
    fontSize: 'calc(100% + 0.2vmin)',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.3vw'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1vw'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.8vw'
    }
  },
  bubbleText: props => ({
    position: 'absolute',
    top: '-25%',
    transform: props.speechPosition === 'left' ? 'translate(-95%,0)' : 'translate(-8%,0)',
    padding: '1em',
    borderRadius: 10,
    backgroundColor: '#B4E7FF',
    maxWidth: '32%',
    [theme.breakpoints.down('xs')]: {
      borderRadius: 6,
      top: '-42%'
    }
  })
}))

const sayings = {
  python: ['This app is more complex so i\'ll use django instead of flask.'],
  javascript: ['This app is front end focused so i\'ll be using express, node &amp; react.']
}

const SpeechBubble = props => {
  let { setTyped, speech, speechPosition } = props;
  const saying = sayings[speech];
  const classes = useStyles(props);

  return (
    <Typography className={classes.bubble}>
      <Typed
        className={clsx(classes.bubbleText, `speechBubble-${speechPosition}`)}
        strings={saying}
        typeSpeed={25}
        typedRef={typed => { setTyped(typed); }}
      />
    </Typography>
  )
}

export default SpeechBubble;