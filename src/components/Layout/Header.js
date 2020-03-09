import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarShift: props => ({
    width: `calc(100% - ${props.drawerWidth}px)`,
    marginLeft: props.drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: 'none',
  },
  icon: {
    color: 'white'
  }
}))

const Header = props => {
  const { handleDrawerOpen, open, hideIcon } = props;
  const classes = useStyles(props);

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        {
          hideIcon ? 
          null : 
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        }
        <Typography variant="h6" className={classes.title} noWrap>
          {props.title}
        </Typography>
        <div>
          <a 
            href='http://linkedin.com/in/shanesaravia'
            target='_blank' 
            className={classes.icon}
            rel='noopener noreferrer'
          >
            <IconButton
              aria-label="LinkedIn profile of host"
              aria-controls="menu-appbar"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
          </a>
          <a
            href='https://github.com/shanesaravia'
            target='_blank'
            className={classes.icon}
            rel='noopener noreferrer'
          >
            <IconButton
              aria-label="LinkedIn profile of host"
              aria-controls="menu-appbar"
              color="inherit"
            >
              <GithubIcon />
            </IconButton>
          </a>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header;