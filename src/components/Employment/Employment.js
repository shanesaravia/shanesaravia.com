import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Job from './modules/Job';
import content from './modules/jobContent';

const useStyles = makeStyles({
  paper: {
    padding: 30
  }
})

const Employment = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Job
        icon='stereod.png'
        companyName='Stereo D'
        jobTitle='Software Developer/Technical Director'
        dateRange='2019 - Present'
        content={content.stereod}
      />
      <Job
        icon='qublix.png'
        companyName='Qublix Games'
        jobTitle='Software Developer'
        dateRange='2018 - 2019'
        content={content.qublix}
      />
      <Job
        icon='microsoft.png'
        companyName='Microsoft'
        jobTitle='IT Infrastructure Manager'
        dateRange='2016 - 2018'
        content={content.microsoft}
      />
      <Job
        icon='microsoft.png'
        companyName='Microsoft'
        jobTitle='IT Analyst'
        dateRange='2016 - 2016'
        content={content.microsoft2}
      />
      <Job
        icon='ppg.png'
        companyName='PPG / AkzoNobel'
        jobTitle='IT Support Analyst (Level 2)'
        dateRange='2011 - 2016'
        content={content.ppg}
        divider={false}
      />
    </Paper>
  )
}

export default Employment;