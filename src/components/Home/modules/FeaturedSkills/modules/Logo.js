import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PythonLogo from './logos/PythonLogo';
import JavascriptLogo from './logos/JavascriptLogo';
import TypescriptLogo from './logos/TypescriptLogo';
import GolangLogo from './logos/GolangLogo';

const useStyles = makeStyles({
  logo: {
    position: 'absolute',
    width: '5.5%',
    top: '31.4%',
    zIndex: 3,
  }
})

const logos = {
  python: PythonLogo,
  javascript: JavascriptLogo,
  typescript: TypescriptLogo,
  golang: GolangLogo
}

const Logo = props => {
  const classes = useStyles();
  const { type } = props;
  const LaptopLogo = logos[type];
  return (
    <LaptopLogo className={classes.logo} />
  )
}

export default Logo;