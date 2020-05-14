import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import Chip from "@material-ui/core/Chip";

// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  container: {
    // paddingTop: "24px",
  },
  table: {
    minWidth: 650,
    border: "1px solid #eee",
  },
});

function createData(item) {
  const { address, type } = item;
  return { address, short: address.substring(2, 5), type };
}

export default function SimpleTable(props) {
  const classes = useStyles();
  const { data } = props;
  const rows = [].concat(data).map((item) => createData(item));
  const [page, setPage] = useState(0);
  function handleChangePage(page, newPage) {
    setPage(newPage);
  }
  return (
    <React.Fragment>
      {rows.length > 0 ? (
        <TableContainer className={classes.container}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Address No.</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="right">Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * 10, page * 10 + 10).map((row) => (
                <TableRow key={row.address}>
                  <TableCell component="th" scope="row">
                    {row.short}
                  </TableCell>
                  <TableCell align="left">{row.address}</TableCell>
                  <TableCell align="right">
                    {row.type == 1 ? (
                      <Chip
                        label="Validator"
                        color="primary"
                        variant="outlined"
                      />
                    ) : (
                      <Chip
                        label="Client"
                        color="secondary"
                        variant="outlined"
                      />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10]}
                  count={data.length}
                  rowsPerPage={10}
                  page={page}
                  onChangePage={handleChangePage}
                  // ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      ) : (
        <img src="https://metamask.io/images/mm-logo.svg" style={{ width: '200px', margin: "64px auto", display: 'block' }}/>
      )}
    </React.Fragment>
  );
}
