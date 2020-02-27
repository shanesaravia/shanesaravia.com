import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SidebarMenu from './SidebarMenu';

// const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  contentData: props => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -props.drawerWidth,
  }),
  contentShift: () => ({
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0,
  }),
  root: {
    display: 'flex',
  },
  drawer: props => ({
    width: props.drawerWidth,
    flexShrink: 0
  }),
  drawerPaper: props => ({
    width: props.drawerWidth,
  }),
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function Sidebar(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const { open, handleDrawerClose } = props;
  console.log('props.drawerWidth: ', props.drawerWidth);
  
  return (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <SidebarMenu handleDrawerClose={handleDrawerClose} />
      </Drawer>
      <main
        className={clsx(classes.contentData, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        { props.content }
      </main>
    </React.Fragment>
  );
}
