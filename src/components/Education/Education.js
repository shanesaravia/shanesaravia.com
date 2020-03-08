import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import rowData from './modules/rowData';

const useStyles = makeStyles({
  icon: {
    height: 50,
    width: 'auto'
  }
})

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
            <TableCell>Degree/Certificate</TableCell>
            <TableCell>Completion Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <img src={row.icon} alt='Education Source Logo' className={classes.icon} />
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.source}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.completionDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Education;