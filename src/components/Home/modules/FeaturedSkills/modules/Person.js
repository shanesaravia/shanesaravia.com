import React from 'react';
import Head from './images/Head';
import Body from './images/Body';
import Legs from './images/Legs';
import Chair from './images/Chair';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  head: {
  },
  body: {
  },
  legs: {
    position: 'absolute',
    // top: 300
  },
  chair: {
    position: 'absolute'
  }
}))

const Person = props => {
  const { head, body, legs, chair } = props;
  const classes = useStyles();

  return (
    <>
      <Head name={head} width='30%' className={classes.head} />
      <Body name={body} width='30%' className={classes.body} />
      <Legs name={legs} width='30%' className={classes.legs} />
      <Chair name={chair} width='50%' className={classes.chair} />
    </>
  )
}

export default Person;