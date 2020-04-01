import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Laptop from './Laptop';
import Head from './Head';
import Body from './Body';

const useStyles = makeStyles(theme => ({
  laptop: {
    position: 'absolute',
    top: '36%',
    left: '18%',
    zIndex: 9992,
    width: '65%'
  },
  head: {
    // position: 'relative',
    position: 'absolute',
    width: '40%',
    top: '-24%',
    left: '50%',
    // top: 12,
    // // top: '4%'
    // [theme.breakpoints.down('md')]: {
    //   top: 8
    // },
    // [theme.breakpoints.down('sm')]: {
    //   top: 6
    // },
  },
  body: {
  }
}))

const Person = props => {
  const { width, className, laptop, hair, skin, headAnimation, chair, shirt, pants, shoes, face } = props;
  const laptopProps = { laptop };
  const headProps = { hair, skin, headAnimation, face };
  const bodyProps = { chair, skin, shirt, pants, shoes };
  const classes = useStyles();
  return (
    <div width={width} className={className}>
      <Laptop className={classes.laptop} {...laptopProps} />
      <Head className={classes.head} {...headProps} />
      <Body className={classes.body} {...bodyProps} />
    </div>
  )
}

export default Person;

Person.defaultProps = {
  chair: 'chair1',
  hair: 'hair1',
  skin: 'skin1',
  shirt: 'shirt1',
  pants: 'pants1',
  shoes: 'shoes1',
  head: 'head1',
  face: 'face1',
  laptop: 'laptop1'
}