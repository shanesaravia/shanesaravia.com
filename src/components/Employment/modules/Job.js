import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  icon: {
    height: 80,
    marginRight: theme.spacing(2)
    // borderRadius: '50%'
  },
  // companyName: {
  // },
  // item: {
  //   flex: 1
  // },
  caption: {
    color: 'grey'
  },
  bullet: {
    fontSize: 30
  },
  listItem: {
    lineHeight: 1,
    paddingTop: 2,
    paddingBottom: 2
  },
  divider: {
    marginBottom: theme.spacing(2)
  }
}))

const Job = props => {
  const classes = useStyles();
  const { icon, companyName, jobTitle, dateRange, content, divider } = props;

  const returnContent = () => {
    return content.map(point => (
      <ListItem className={classes.listItem}>
        <ListItemIcon className={classes.bullet}>
          {'•'}
        </ListItemIcon>
        <ListItemText
          primary={point}
        />
      </ListItem>
    ))
  }

  return (
    <>
      <Grid container>
        <Grid item>
          <img src={icon} className={classes.icon} />
        </Grid>
        <Grid item>
          <Typography variant='h6' className={classes.companyName}>{companyName}</Typography>
          <Typography>{jobTitle}</Typography>
          <Typography variant='caption' className={classes.caption}>{dateRange}</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <List dense>
            {returnContent()}
          </List>
        </Grid>
      </Grid>
      {divider ?
      <Divider className={classes.divider} /> :
      null}
    </>
  )
}

Job.defaultProps = {
  divider: true
}

export default Job;