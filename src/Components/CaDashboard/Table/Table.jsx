import * as React from "react";
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import "./Table.css";
import { ThemeProvider, createTheme } from "@mui/material";

const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
];


  // const response = await axios.get("http://localhost:3000/getCaData")
    // const ca = response.data
    // console.log(ca);
    // const referrals = ca.referrals

 const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#424242', // Adjust the color to a lighter shade
    },
    background: {
      default: '#1e1e1e6f', // Adjust the background color to a lighter shade
      paper: '#424242', // Adjust the paper color to a lighter shade
    },
    table: {
      background: '#555', // Adjust the table background color to a lighter shade
    },
  },
});

export default function BasicTable() {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  })

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
        size: 150,
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 150,
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableFullScreenToggle: false,
    visibleInShowHideMenu: false,
    muiTableProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
        color:"white"
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
        color:"white",
        fontStyle: 'italic',
        fontWeight: 'normal',
        fontFamily: 'monospace',
      },
    },
    muiTableBodyCellProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
        color:"white",
        fontFamily: 'monospace', 
      },
    },
     //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
     muiPaginationProps: {
      color: 'secondary',
      rowsPerPageOptions: [5, 10, 20],
      shape: 'rounded',
      variant: 'outlined',
 
    },
    });

  return (
   <ThemeProvider theme={darkTheme}>
      <div className="Table overflow-x-auto">
        <MaterialReactTable table={table} />
      </div>
    </ThemeProvider>
  );
}
