import React from 'react';
import Typed from 'react-typed';
import { Typography } from '@material-ui/core';

const sayings = {
  python: ['This app is more complex so i\'ll use django instead of flask.'],
  javascript: ['This app is front end focused so i\'ll be using express, node and react.']
}

const SpeechBubble = props => {
  let { setTyped, speech, speechPosition } = props;
  const saying = sayings[speech];

  return (
    <Typography>
      <Typed
        className={`speechBubble-${speechPosition}`}
        strings={saying}
        typeSpeed={25}
        typedRef={typed => { setTyped(typed); }}
      />
    </Typography>
  )
}

export default SpeechBubble;