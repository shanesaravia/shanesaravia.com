import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper 
} from '@material-ui/core';
import clsx from 'clsx';
import rowData from './modules/rowData';

const useStyles = makeStyles(theme => ({
  icon: {
    height: 50,
    width: 'auto'
  },
  table: {
    [theme.breakpoints.down('sm')]: {
      zoom: '68%'
    }
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      padding: '14px 10px'
    }
  }
}))

const Education = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Source</TableCell>
            <TableCell>Degree / Certificate</TableCell>
            <TableCell>Completion Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <img src={row.icon} alt='Education Source Logo' className={clsx(classes.icon, classes.mobile)} />
              </TableCell>
              <TableCell className={classes.mobile}>{row.type}</TableCell>
              <TableCell className={classes.mobile}>{row.source}</TableCell>
              <TableCell className={classes.mobile}>{row.name}</TableCell>
              <TableCell className={classes.mobile}>{row.completionDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Education;