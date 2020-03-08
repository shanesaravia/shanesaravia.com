import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import panelContent from './modules/panelContent';
import { 
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from '@material-ui/core';

const useStylesOverride = makeStyles(() => ({
  expanded: {},
  root: {
    "&$expanded": {
      borderBottom: '1px #f0f0f0 solid',
      marginBottom: 20
    }
  }
}))

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  panelDetails: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
    gridRowGap: 20
  },
  icon: {
    height: 50
  },
  skillName: {
  }
}))

const Skills = () => {
  const classes = useStyles();
  const classesOverride = useStylesOverride();
  return (
    <>
      {
        panelContent.map((panel, idx) => {
            return (
              <ExpansionPanel
              defaultExpanded
              className={classes.panel}
              key={idx}
              >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${panel.heading.toLowerCase()}-content`}
                id={`${panel.heading.toLowerCase()}-header`}
                classes={classesOverride}
              >
              <Typography className={classes.heading}>{panel.heading}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetails}>
                  {
                    panel.content.map(skill => {
                      return (
                        <div className={classes.container} key={skill.name}>
                          <img src={skill.icon} alt='Skill/Tool Icon' className={classes.icon} />
                          <Typography className={classes.skillName}>
                            {skill.name}
                          </Typography>
                        </div>
                      )
                    })
                  }
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        })
      }
    </>
  )
}

export default Skills;