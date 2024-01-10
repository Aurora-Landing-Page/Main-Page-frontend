import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { ThemeProvider, createTheme } from "@mui/material";

function createData(name, phone, email, college) {
  return { name, phone, email, college };
}

const rows = [
  createData("abc", 18908424, "abc@abc.in", "Abc"),
  createData("abc", 18908424, "abc@abc.in", "xyz"),
  createData("abc", 18908424, "abc@abc.in", "abc"),
  createData("abc", 18908421, "abc@abc.in", "xyz"),
];


  // const response = await axios.get("http://localhost:3000/getCaData")
    // const ca = response.data
    // console.log(ca);
    // const referrals = ca.referrals


export default function BasicTable() {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  })

  return (
      <div className="Table">
      <h3>Refferals</h3>
      <ThemeProvider theme={theme}>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029", borderRadius: '15px'}}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table" className="tab">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Phone</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">College</TableCell>
                {/* <TableCell align="left"></TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody >
              {rows.map((row) => (
                <TableRow
                  key={row.email}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.phone}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.college}</TableCell>
                  <TableCell align="left">
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </ThemeProvider>
      </div>
  );
}
