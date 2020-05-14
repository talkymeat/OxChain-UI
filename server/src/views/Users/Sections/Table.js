import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Chip from '@material-ui/core/Chip';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  container: {
    paddingTop: "24px",
  },
  table: {
    minWidth: 650,
    border: "1px solid #eee",
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat };
}

const rows = [
  createData("0x014FC8f5550c623Ed89a541D50d4733bE44Ea010", 'Validator', '2020-04-01 10:00:32' ),
  createData("0x014FC8f5550c623Ed89a541D50d4733bE44Ea010", 'Client', '2020-04-01 10:00:32' ),
  createData("0x014FC8f5550c623Ed89a541D50d4733bE44Ea010", 'Client', '2020-04-01 10:00:32' ),
  createData("0x014FC8f5550c623Ed89a541D50d4733bE44Ea010", 'Validator', '2020-04-01 10:00:32' ),
  createData("0x014FC8f5550c623Ed89a541D50d4733bE44Ea010", 'Validator', '2020-04-01 10:00:32' ),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">RegisteredAt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{
                  row.calories == "Validator" ? <Chip label="Validator" color="primary" variant="outlined"/> : <Chip label="Client" color="secondary" variant="outlined"/>
              }</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
