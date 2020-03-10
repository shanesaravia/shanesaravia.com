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