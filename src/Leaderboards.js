import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
      width: '50%',
      marginTop: theme.spacing.unit * 3,
      margin: "0 auto"
  },
  table: {
    minWidth: 400,
  },
});

let id = 0;
function createData(user, rank, aqd) {
  id += 1;
  return { id, user, rank, aqd};
}

const rows = [
  createData('JamesTheRunner', 1, 300),
  createData('CycleQueen24', 2, 280),
  createData('SwiftManhattan', 3, 275),
  createData('PizzaDude78', 4, 260),
  createData('OnMyFeet2019', 5, 244),
];

function Leaderboards(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell align="right">Rank</TableCell>
            <TableCell align="right">AQD's</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.user}</TableCell>
              <TableCell align="right">{row.rank}</TableCell>
              <TableCell align="right">{row.aqd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br />
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Company Sponsors</TableCell>
            <TableCell align="right">Rank</TableCell>
            <TableCell align="right">AQD's</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.user}</TableCell>
              <TableCell align="right">{row.rank}</TableCell>
              <TableCell align="right">{row.aqd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

Leaderboards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Leaderboards);
