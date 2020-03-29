import React from 'react';
import './skills.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  label: {
    width: '90%',
    position: 'relative',
    left: '5%',
    top: '10%',
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50 %, -50 %)',
    // border: '1px solid blue'
  }
}))

const Skills = () => {
  const classes = useStyles();
  return (
    <section>
      <span class="trash">
        <span></span>
        <i><img className={classes.label} src='python.png' /></i>
      </span>
    </section>
  )
}

export default Skills;