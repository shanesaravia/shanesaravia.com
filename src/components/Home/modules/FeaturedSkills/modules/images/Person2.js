import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Laptop from './Laptop';
import Head from './Head';
import Body from './Body';
import Body2 from './Body2';

const useStyles = makeStyles(theme => ({
  laptop: {
    // position: 'absolute',
    // zIndex: 2,
    // top: '18%',
    // left: '18%',
    // width: '65%',
    // [theme.breakpoints.down('xs')]: {
    //   top: '17%'
    // },
  },
  head: {
    // position: 'absolute',
    // left: '50%',
    // top: '-23%',
    // position: 'relative',
    // position: 'absolute',
    // width: '40%',
    // top: '-24%',
    // left: '50%',
    // top: 12,
    // // top: '4%'
    // [theme.breakpoints.down('md')]: {
    //   top: 8
    // },
    // [theme.breakpoints.down('sm')]: {
    //   top: 6
    // },
    // [theme.breakpoints.down('xs')]: {
    //   top: '-22%'
    // },
  },
  body: {
  }
}))

const Person2 = props => {
  const { className, laptop, hair, skin, headAnimation, chair, shirt, pants, shoes, face } = props;
  const classes = useStyles();
  return (
    <div className={className}>
      <Body2 />
    </div>
  )
}

export default Person2;

Person2.defaultProps = {
  chair: 'chair1',
  hair: 'hair1',
  skin: 'skin1',
  shirt: 'shirt1',
  pants: 'pants1',
  shoes: 'shoes1',
  head: 'head1',
  face: 'face1',
  laptop: 'laptop1',
  headAnimation: 'head1'
}