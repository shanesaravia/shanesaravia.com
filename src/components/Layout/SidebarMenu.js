import React from 'react';
import { Link } from 'react-router-dom';
import { MenuList, MenuItem, ListItemIcon, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import SkillsIcon from '@material-ui/icons/Book';
import EmploymentIcon from '@material-ui/icons/Work';
import EducationIcon from '@material-ui/icons/School';
import ProjectsIcon from '@material-ui/icons/Build';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  removeLink: {
    textDecoration: 'none',
    color: 'black'
  },
  menuItem: {
    padding: theme.spacing(2)
  }
}))

const SidebarMenu = props => {
  const classes = useStyles();
  const { handleDrawerClose } = props;

  const menuOptions = [
    {
      label: 'Home',
      icon: <HomeIcon />,
      link: '/'
    },
    {
      label: 'Skills',
      icon: <SkillsIcon />,
      link: '/skills'
    },
    {
      label: 'Employment',
      icon: <EmploymentIcon />,
      link: '/employment'
    },
    {
      label: 'Projects',
      icon: <ProjectsIcon />,
      link: '/projects'
    },
    {
      label: 'Education',
      icon: <EducationIcon />,
      link: '/education'
    }
  ]
  return (
    <MenuList>
      {Object.entries(menuOptions).map(([k, v]) => {
        return (
          <div key={k}>
            {v.divider ? <Divider /> : null}
            <Link to={v.link} onClick={handleDrawerClose} className={classes.removeLink}>
              <MenuItem className={classes.menuItem}>
                <ListItemIcon>
                  {v.icon}
                </ListItemIcon>
                <Typography>
                  {v.label}
                </Typography>
              </MenuItem>
            </Link>
          </div>
        )
      })}
    </MenuList>
  )
}

SidebarMenu.propTypes = {
  handleDrawerClose: PropTypes.func
}

export default SidebarMenu;